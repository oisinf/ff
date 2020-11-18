import React, { useContext } from 'react';
import { createStyles, Grid, Modal, Typography } from '@material-ui/core';
import { ContainerContext } from '../Container/Container';
import { makeStyles } from '@material-ui/core/styles';
import photoMissing from '../../assets/imgs/photoMissing.png';
import { PlayerInfo } from '../PlayerGridView/PlayerGridView';
import { KeyLabel, labels } from './labels';

export type PlayerInfoModalProps = {};

export type PlayerModalInfo = {
  isModalOpen: boolean;
  playerInfo:
    | (Partial<PlayerInfo> & {
        img: string | null;
        playerPos: string;
        playerTeam: string;
      })
    | null;
};
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'relative',
      width: '80vw',
      height: '70vh',
      borderRadius: 10,
      backgroundColor: theme.palette.primary.light,
      margin: '15vh 10vw 15vh 10vw',
      overflow: 'scroll'
    },
    title: { paddingTop: 12, color: theme.palette.primary.contrastText, width: 'fit-content', margin: '0 auto 0 auto', height: '10%' },
    info: {
      color: theme.palette.primary.contrastText,
      padding: 4
    },
    infoText: {
      margin: 'auto',
      width: 'fit-content'
    }
  })
);

const PlayerModal: React.FC<PlayerInfoModalProps> = () => {
  const {
    state: {
      playerModalInfo: { isModalOpen, playerInfo }
    }
  } = useContext(ContainerContext);
  const classes = useStyles();

  return (
    <Modal open={isModalOpen}>
      <div className={classes.root}>
        {playerInfo && (
          <>
            <Typography className={classes.title} variant="h4">
              {playerInfo.first_name} {playerInfo.second_name}
            </Typography>
            <Grid container spacing={2} direction={'row'} justify={'flex-start'} className={classes.info}>
              <Grid item xs={12} lg={4} style={{ display: 'flex', flexDirection: 'column' }}>
                <img style={{ height: 250, width: 250, margin: 'auto' }} src={playerInfo.img ?? photoMissing} alt="Player Photo" />
                <Typography className={classes.infoText} variant="h3">
                  {playerInfo.playerTeam}
                </Typography>
                <Typography className={classes.infoText} variant="h2">
                  {playerInfo.playerPos}
                </Typography>
                <Typography className={classes.infoText} variant="h3">
                  Total Points: {playerInfo.total_points}
                </Typography>
              </Grid>
              <Grid container item direction={'row'} md={12} lg={8} style={{ width: 'fit-content' }}>
                {playerInfo.news && (
                  <Grid item xs={12} lg={12}>
                    <Typography variant="h5">{playerInfo.news}</Typography>
                  </Grid>
                )}
                <Grid container item xs={12} lg={12} direction={'row'}>
                  {labels.map((val: KeyLabel, i) => {
                    return (
                      <Grid item key={i} xs={12} lg={4}>
                        <Typography className={classes.infoText} variant="h5">
                          {val.label}
                        </Typography>
                        <Typography className={classes.infoText} variant="h6">
                          {playerInfo[val.key as keyof PlayerInfo]}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </Modal>
  );
};

export default React.memo(PlayerModal);
