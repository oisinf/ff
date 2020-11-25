import React, { memo, useContext } from 'react';
import { createStyles, Grid, Theme } from '@material-ui/core';
import PlayerCard from '../PlayerCardView/PlayerCard';
import { makeStyles } from '@material-ui/core/styles';
import { ContainerContext } from '../Container/Container';
import { VALUE_ALL } from '../../reducers/ContainerReducer';
import { QueryResult, useQuery } from 'react-query';
import axios from 'axios';
export type PlayerGridViewProps = {
  players: Array<PlayerInfo>;
  teams: Array<TeamInfo>;
  positions: Array<PosInfo>;
};

export type PlayerInfo = {
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

const PlayerGridView: React.FC<PlayerGridViewProps> = ({ players, positions, teams }) => {
  const classes = useStyles();
  const { state } = useContext(ContainerContext);
  const { isLoading, data }: QueryResult<Array<string>> = useQuery('ff_images', async () => {
    const pngs: string[] = players.map(p => p.photo);
    const res = await axios.post('player_imgs', { pngs });
    return res.data;
  });
  return (
    <>
      <Grid container spacing={4} className={classes.root} justify="space-evenly">
        {players.map((playerInfo, index) => {
          if (
            (state.team === VALUE_ALL && state.position === VALUE_ALL) ||
            (state.team === playerInfo.team && state.position === VALUE_ALL) ||
            (state.team === VALUE_ALL && state.position === playerInfo.element_type) ||
            (state.team === playerInfo.team && state.position === playerInfo.element_type)
          ) {
            return (
              <PlayerCard
                player={playerInfo}
                playerTeam={teams[playerInfo.team - 1].short_name}
                playerPos={positions[playerInfo.element_type - 1].singular_name_short}
                key={index}
                img={isLoading ? 'LOADING' : data?.[index] ?? null}
              />
            );
          } else return undefined;
        })}
      </Grid>
    </>
  );
};

export default memo(PlayerGridView);
