import React, { memo } from "react";
import {
  Card,
  CardHeader,
  createStyles,
  CircularProgress
} from "@material-ui/core";
import { PlayerInfo } from "../PlayerGridView/PlayerGridView";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import axios from "axios";
import photoMissing from "./photoMissing.png";

export type PlayerCardProps = {
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
    },
    imgContainer: {
      margin: "10%"
    }
  })
);

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const classes = useStyles();

  const { error, isLoading, data } = useQuery(
    `ff_image${player.id}`,
    async () => {
      const res = await axios.get(
        `https://resources.premierleague.com/premierleague/photos/players/40x40/p${player.photo.replace(
          "jpg",
          "png"
        )}`,
        { responseType: "arraybuffer" }
      );
      const base64 = btoa(
        new Uint8Array(res.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return `data:;base64,${base64}`;
    }
  );

  return (
    <Card className={classes.root}>
      <CardHeader title={player.web_name} className={classes.header} />
      <div className={classes.imgContainer}>
        {isLoading && !data && !error && <CircularProgress />}
        {(data || error) && (
          <img src={error ? photoMissing : data} alt={player.web_name} />
        )}
      </div>
    </Card>
  );
};

export default memo(PlayerCard);
