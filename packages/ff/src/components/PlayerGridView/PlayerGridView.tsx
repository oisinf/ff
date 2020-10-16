import React, { memo, useEffect, useReducer, useState } from 'react';
import { createStyles, Grid, Theme } from '@material-ui/core';
import PlayerCard from '../PlayerCardView/PlayerCard';
import { makeStyles } from '@material-ui/core/styles';
import containerReducer, { ContainerState } from '../../reducers/ContainerReducer';
export type PlayerGridViewProps = {
  players: Array<PlayerInfo>;
  teams: Array<TeamInfo>;
  positions: Array<PosInfo>;
  store: ContainerState;
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

type CardViewInfo = {
  teamId: number;
  positionId: number;
  cardView: JSX.Element;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 10
    }
  })
);

const PlayerGridView: React.FC<PlayerGridViewProps> = ({ players, positions, teams, store }) => {
  const classes = useStyles();
  const [state] = useReducer(containerReducer, store);
  const [position, setPosition] = useState(state.position);
  const [team, setTeam] = useState(state.team);

  const cardViews: CardViewInfo[] = players.map((playerInfo: PlayerInfo, index) => {
    return {
      teamId: playerInfo.team,
      positionId: playerInfo.element_type,
      cardView: (
        <Grid key={index} item>
          <PlayerCard
            player={playerInfo}
            playerTeam={teams[playerInfo.team - 1].short_name}
            playerPos={positions[playerInfo.element_type - 1].singular_name_short}
          />
        </Grid>
      )
    };
  });
  useEffect(() => {
    setPosition(state.position);
  }, [state.position]);
  useEffect(() => {
    setTeam(state.team);
  }, [state.team]);
  return (
    <>
      <Grid container spacing={2} className={classes.root} justify="space-around">
        {cardViews.map(card => {
          if (card.teamId === state.team) {
            return card.cardView;
          }
        })}
      </Grid>
    </>
  );
};

export default memo(PlayerGridView);
