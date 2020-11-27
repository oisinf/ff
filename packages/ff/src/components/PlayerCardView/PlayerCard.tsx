import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CircularProgress, createStyles, Grid, IconButton, Theme, Typography } from '@material-ui/core';
import { PlayerInfo } from '../PlayerGridView/PlayerGridView';
import { makeStyles } from '@material-ui/core/styles';
import photoMissing from '../../assets/imgs/photoMissing.png';
import InfoIcon from '@material-ui/icons/Info';
import { setPlayerModalInfo } from '../../slices/playerInfoSlice';
import { useDispatch } from 'react-redux';

export type PlayerCardProps = {
  player: PlayerInfo;
  playerTeam: string;
  playerPos: string;
  img: string | null;
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
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: 8,
      paddingBottom: '0px !important'
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

const PlayerCard: React.FC<PlayerCardProps> = ({ player, playerPos, playerTeam, img }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grid item data-qa="player_card">
      <Card className={classes.root}>
        <CardHeader title={player.web_name} className={classes.header} />
        <CardContent className={classes.cardContent}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className={classes.imgContainer}>
              {img === 'LOADING' ? (
                <CircularProgress size={80} color="secondary" />
              ) : (
                <img className={classes.img} src={img === 'not_found' || !img ? photoMissing : img} alt={player.web_name} />
              )}
              <Typography variant="h6" data-qa="player_team">
                {playerTeam}
              </Typography>
              <Typography variant="body1" data-qa="player_position">
                {playerPos}
              </Typography>
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
          </div>
          <IconButton
            color="secondary"
            onClick={() => {
              dispatch(
                setPlayerModalInfo({
                  modalInfo: { isModalOpen: true, playerInfo: { ...player, img, playerPos, playerTeam } }
                })
              );
            }}
            data-qa={`info_button_${player.web_name}`}
          >
            <InfoIcon />
          </IconButton>
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
