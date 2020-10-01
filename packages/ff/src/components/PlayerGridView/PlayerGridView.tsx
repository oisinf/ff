import React, { memo } from "react";
import { Grid } from "@material-ui/core";
import PlayerCard from "../PlayerCardView/PlayerCard";

type Props = {
  players: Array<PlayerInfo>;
};

export type PlayerInfo = {
  web_name: string;
  photo: string;
};

const PlayerGridView: React.FC<Props> = ({ players }) => {
  return (
    <>
      <Grid container spacing={2}>
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
