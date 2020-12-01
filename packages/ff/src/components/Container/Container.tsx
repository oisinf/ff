import React, { memo } from 'react';
import { QueryResult, useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { FilterCard, PlayerGridView, PlayerModal } from '../index';
import { PlayerInfo, PosInfo, TeamInfo } from '../PlayerGridView/PlayerGridView';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, createStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../configureStore';
import { setContainerState } from '../../slices/apiResSlice';

const useStyles = makeStyles(() =>
  createStyles({
    root: { marginRight: '1em', marginLeft: '1em' },
    errorDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 'auto',
      marginTop: '25vh'
    }
  })
);

export type FootballInfo = {
  elements: Array<PlayerInfo>;
  element_types: Array<PosInfo>;
  teams: Array<TeamInfo>;
};

const Container: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { teams, element_types, elements } = useSelector((state: RootState) => state.apiResponse);
  const { isLoading, isError }: QueryResult<void> = useQuery('ff_request', async () => {
    if (elements.length === 0) {
      const res: AxiosResponse<FootballInfo> = await axios.get<FootballInfo>('football-stuff');
      dispatch(setContainerState(res.data));
    }
  });

  return (
    <>
      {(isLoading || isError) && elements.length < 1 && (
        <div>
          {isLoading ? (
            <div className={classes.errorDiv}>
              <CircularProgress size={250} />
              <Typography variant="body1">Loading...</Typography>
            </div>
          ) : (
            <Typography variant="h1">Error loading data... :(</Typography>
          )}
        </div>
      )}
      {elements && !isLoading && !isError && (
        <div className={classes.root}>
          <FilterCard teams={teams} positions={element_types} />
          <PlayerGridView players={elements} teams={teams} positions={element_types} />
          <PlayerModal />
        </div>
      )}
    </>
  );
};

export default memo(Container);
