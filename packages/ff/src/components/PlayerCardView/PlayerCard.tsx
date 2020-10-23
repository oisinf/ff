import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CircularProgress, createStyles, Grid, Theme, Typography } from '@material-ui/core';
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
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      minWidth: 180,
      minHeight: 180
    },
    header: {
      textAlign: 'center',
      padding: 5
    },
    imgContainer: {
      textAlign: 'center'
    },
    img: {
      height: 80,
      width: 80
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
      borderRadius: 10,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8
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
    <Grid item>
      <Card className={classes.root}>
        <CardHeader title={player.web_name} className={classes.header} />
        <CardContent className={classes.cardContent}>
          <div className={classes.imgContainer}>
            {isLoading && !data && !error && <CircularProgress size={80} color="secondary" />}
            {(data || error) && <img className={classes.img} src={error ? photoMissing : data} alt={player.web_name} />}
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
    </Grid>
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
