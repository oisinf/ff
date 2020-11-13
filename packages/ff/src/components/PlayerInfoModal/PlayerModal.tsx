import React, { useContext } from 'react';
import { createStyles, Modal, Typography } from '@material-ui/core';
import { ContainerContext } from '../Container/Container';
import { makeStyles } from '@material-ui/core/styles';
import photoMissing from '../../assets/imgs/photoMissing.png';
import { PlayerInfo } from '../PlayerGridView/PlayerGridView';
import { KeyLabel, labels } from './labels';

export type PlayerInfoModalProps = {};

export type PlayerModalInfo = {
  isModalOpen: boolean;
  playerInfo: {
    [key: string]: Partial<PlayerInfo> & {
      img: string | null;
      playerPos: string;
      playerTeam: string;
    };
  } | null;
};
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'relative',
      width: '80vw',
      height: '70vh',
      borderRadius: 10,
      backgroundColor: theme.palette.primary.light,
      margin: '15vh 10vw 15vh 10vw'
    },
    title: { paddingTop: 12, color: theme.palette.primary.contrastText, width: 'fit-content', margin: '0 auto 0 auto', height: '10%' },
    info: {
      display: 'flex',
      flexDirection: 'row',
      margin: 32,
      color: theme.palette.primary.contrastText,
      height: '80%',
      width: '100%'
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
              Player Name
            </Typography>
            <div className={classes.info}>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '40%' }}>
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
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', width: '55%', flexWrap: 'wrap', position: 'relative' }}>
                {labels.map((val: KeyLabel, i) => {
                  return (
                    <div key={i} style={{ marginBottom: 12 }}>
                      <Typography className={classes.infoText} variant="h5">
                        {val.label}
                      </Typography>
                      <Typography className={classes.infoText} variant="h6">
                        {playerInfo[val.key]}
                      </Typography>
                    </div>
                  );
                })}
                {/*      <div style={{margin: 0, width: 'fit-content'}}>
                  <Typography variant="h5">News</Typography>
                  <Typography style={{ width: '30%' }} variant="h6">
                    {playerInfo.news}
                  </Typography>
                </div>*/}
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default React.memo(PlayerModal);
