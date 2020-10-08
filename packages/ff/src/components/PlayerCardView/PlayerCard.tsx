import React, { memo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  createStyles,
  Theme,
  Typography
} from "@material-ui/core";
import { PlayerInfo } from "../PlayerGridView/PlayerGridView";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import photoMissing from "./photoMissing.png";
import { getPlayerPngAndConvertToBase64 } from "../PlayerGridView/api";

export type PlayerCardProps = {
  player: PlayerInfo;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
      height: 200,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText
    },
    header: {
      textAlign: "center",
      padding: "5px"
    },
    imgContainer: {},
    cardContent: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: "8px"
    },
    stats: {
      width: "40%"
    }
  })
);

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const classes = useStyles();

  const { error, isLoading, data } = useQuery(
    `ff_image${player.id}`,
    async (): Promise<string> => {
      return await getPlayerPngAndConvertToBase64(player.photo);
    }
  );

  return (
    <Card className={classes.root}>
      <CardHeader title={player.web_name} className={classes.header} />
      <CardContent className={classes.cardContent}>
        <div className={classes.imgContainer}>
          {isLoading && !data && !error && <CircularProgress />}
          {(data || error) && (
            <img src={error ? photoMissing : data} alt={player.web_name} />
          )}
        </div>
        <div className={classes.stats}>
          <PInfo title="Pos." name="test" />
          <PInfo title="" name="test" />
          <PInfo title="Pos." name="test" />
        </div>
      </CardContent>
    </Card>
  );
};

const PInfo: React.FC<{ title: string; name: string }> = ({ title, name }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{name}</Typography>
    </>
  );
};

export default memo(PlayerCard);

//Per player, team, position, points per game %
//per position,
// striker/mid -> goals, assists,
// defender -> clean sheets,  yellow cards
