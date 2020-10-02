import React, { memo } from "react";
import { createStyles, Grid, Theme } from "@material-ui/core";
import PlayerCard from "../PlayerCardView/PlayerCard";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  players: Array<PlayerInfo>;
};

export type PlayerInfo = {
  web_name: string;
  photo: string;
  id: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      borderRadius: 10
    }
  })
);

const PlayerGridView: React.FC<Props> = ({ players }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        {players.map((playerInfo: PlayerInfo, index) => {
          return (
            <Grid key={index} item>
              <PlayerCard player={playerInfo} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default memo(PlayerGridView);
