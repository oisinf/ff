import React, { memo } from 'react';
import { createStyles, Grid, Theme } from '@material-ui/core';
import PlayerCard from '../PlayerCardView/PlayerCard';
import { makeStyles } from '@material-ui/core/styles';
import { VALUE_ALL } from '../../slices/playerInfoSlice';
import { QueryResult, useQuery } from 'react-query';
import axios from 'axios';
import { RootState } from '../../configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { setElements } from '../../slices/apiResSlice';

export type PlayerGridViewProps = {
  players: Array<PlayerInfo>;
  teams: Array<TeamInfo>;
  positions: Array<PosInfo>;
};

export type PlayerInfo = {
  base64_photo: string | undefined;
  web_name: string;
  photo: string;
  id: number;
  element_type: number;
  team: number;
  goals_scored: number;
  assists: number;
  total_points: number;
  points_per_game: number;
  clean_sheets: number;
  yellow_cards: number;
  minutes: number;
  bps: number;
  first_name: string;
  second_name: string;
  goals_conceded: number;
  red_cards: number;
  saves: number;
  penalties_saved: number;
  own_goals: number;
  bonus: number;
  news: string;
  selected_by_percent: string;
  penalties_missed: number;
};

export type TeamInfo = {
  id: number;
  name: string;
  short_name: string;
};

export type PosInfo = {
  id: number;
  singular_name_short: string;
  singular_name: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 10
    }
  })
);

const sortPlayers = (team: string | number, position: string | number, stat: string | undefined, players: PlayerInfo[]) => {
  return players
    .slice()
    .sort((a: PlayerInfo, b: PlayerInfo) => {
      if (stat) {
        return (b[stat as keyof PlayerInfo] as number) - (a[stat as keyof PlayerInfo] as number);
      }
      return 0;
    })
    .filter(playerInfo => {
      if (
        (team === VALUE_ALL && position === VALUE_ALL) ||
        (team === playerInfo.team && position === VALUE_ALL) ||
        (team === VALUE_ALL && position === playerInfo.element_type) ||
        (team === playerInfo.team && position === playerInfo.element_type)
      ) {
        return playerInfo;
      } else return undefined;
    });
};

const PlayerGridView: React.FC<PlayerGridViewProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sortedPlayers = useSelector((state: RootState) =>
    sortPlayers(state.container.team, state.container.position, state.container.stat, state.apiResponse.elements)
  );
  const { teams, element_types, elements } = useSelector((state: RootState) => state.apiResponse);

  const { isLoading }: QueryResult<void> = useQuery('ff_images', async () => {
    const pngs: string[] = elements.map(p => p.photo);
    const res = await axios.post('player_imgs', { pngs });
    const updatedElements = elements.map((info, i) => {
      return (info.base64_photo = res.data[i]);
    });
    dispatch(setElements(updatedElements));
  });
  return (
    <>
      <Grid container spacing={4} className={classes.root} justify="space-evenly">
        {sortedPlayers.map((playerInfo, index) => {
          return (
            <PlayerCard
              player={playerInfo}
              playerTeam={teams[playerInfo.team - 1].short_name}
              playerPos={element_types[playerInfo.element_type - 1].singular_name_short}
              key={index}
              img={isLoading ? 'LOADING' : playerInfo.base64_photo ?? null}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default memo(PlayerGridView);
