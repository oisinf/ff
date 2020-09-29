import React, { memo } from "react";
import { Card, CardHeader, createStyles, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
type Props = {
  players: Array<PlayerInfo>;
};

export type PlayerInfo = {
  web_name: string;
  photo: string;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
      height: 200
    },
    header: {
      textAlign: "center"
    }
  })
);

const List: React.FC<Props> = ({ players }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        {players.map((playerInfo: PlayerInfo, index) => {
          return (
            <Grid key={index} item>
              <Card className={classes.root}>
                <CardHeader
                  title={playerInfo.web_name}
                  className={classes.header}
                />
                <img
                  src={`https://resources.premierleague.com/premierleague/photos/players/40x40/p${playerInfo.photo.replace(
                    "jpg",
                    "png"
                  )}`}
                  alt={playerInfo.web_name}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default memo(List);
