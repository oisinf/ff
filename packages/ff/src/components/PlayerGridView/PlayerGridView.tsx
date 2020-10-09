import React, { memo } from "react";
import { createStyles, Grid, Theme } from "@material-ui/core";
import PlayerCard from "../PlayerCardView/PlayerCard";
import { makeStyles } from "@material-ui/core/styles";

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
};

export type TeamInfo = {
  id: number;
  name: string;
  short_name: string;
};

export type PosInfo = {
  id: number;
  singular_name_short: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 10
    }
  })
);

const PlayerGridView: React.FC<PlayerGridViewProps> = ({
  players,
  positions,
  teams
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.root}
        justify="space-around"
      >
        {players.map((playerInfo: PlayerInfo, index) => {
          return (
            <Grid key={index} item>
              <PlayerCard
                player={playerInfo}
                playerTeam={teams[playerInfo.team - 1].short_name}
                playerPos={
                  positions[playerInfo.element_type - 1].singular_name_short
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default memo(PlayerGridView);
