import React, { memo } from "react";
import { Card, CardHeader, createStyles } from "@material-ui/core";
import { PlayerInfo } from "../PlayerGridView/PlayerGridView";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  player: PlayerInfo;
};

const useStyles = makeStyles(() =>
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

const PlayerCard: React.FC<Props> = ({ player }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Test Name" className={classes.header} />
      <img
        src={`https://resources.premierleague.com/premierleague/photos/players/40x40/p${player.photo.replace(
          "jpg",
          "png"
        )}`}
        alt={player.web_name}
      />
    </Card>
  );
};

export default memo(PlayerCard);
