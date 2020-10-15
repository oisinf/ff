import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CircularProgress, createStyles, Theme, Typography } from '@material-ui/core';
import { PlayerInfo } from '../PlayerGridView/PlayerGridView';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import photoMissing from './photoMissing.png';
import axios from 'axios';

export type PlayerCardProps = {
  player: PlayerInfo;
  playerTeam: string;
  playerPos: string;
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
      textAlign: 'center',
      padding: '5px'
    },
    imgContainer: {
      textAlign: 'center'
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: '8px'
    },
    stats: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '10px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '8px'
    }
  })
);

const PlayerCard: React.FC<PlayerCardProps> = ({ player, playerPos, playerTeam }) => {
  const classes = useStyles();

  const { error, isLoading, data } = useQuery(
    `ff_image${player.id}`,
    async (): Promise<string> => {
      const res = await axios.get(`png/${player.photo}`);
      return res.data;
    }
  );

  return (
    <Card className={classes.root}>
      <CardHeader title={player.web_name} className={classes.header} />
      <CardContent className={classes.cardContent}>
        <div className={classes.imgContainer}>
          {isLoading && !data && !error && <CircularProgress />}
          {(data || error) && <img src={error ? photoMissing : data} alt={player.web_name} />}
          <Typography variant="h6">{playerTeam}</Typography>
          <Typography variant="body1">{playerPos}</Typography>
        </div>
        <div className={classes.stats}>
          {(playerPos === 'GKP' || playerPos === 'DEF') && (
            <>
              <Info stat={player.clean_sheets} title="Sheets" />
              <Info stat={player.yellow_cards} title="Yellows" />
            </>
          )}
          {(playerPos === 'ATK' || playerPos === 'MID') && (
            <>
              <Info stat={player.goals_scored} title="Goals" />
              <Info stat={player.assists} title="Assists" />
            </>
          )}
          <Info stat={player.total_points} title="Total" />
          <Info stat={player.points_per_game} title="PPG" />
        </div>
      </CardContent>
    </Card>
  );
};

const Info: React.FC<{ stat: number; title: string }> = React.memo(({ stat, title }) => {
  return (
    <Typography variant="body1">
      <b>{stat}</b> {title}
    </Typography>
  );
});

export default memo(PlayerCard);

//Per player, team, position, points per game % bps = bonus point system
//per position,
// striker/mid -> goals, assists,
// defender -> clean sheets,  yellow cards
