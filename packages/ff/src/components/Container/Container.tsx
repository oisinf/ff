import React, { memo, useReducer } from 'react';
import { QueryResult, useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { FilterCard, PlayerGridView } from '../index';
import { PlayerInfo, PosInfo, TeamInfo } from '../PlayerGridView/PlayerGridView';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, createStyles, Typography } from '@material-ui/core';
import reducer, { ContainerAction, ContainerState, initialState } from '../../reducers/ContainerReducer';

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

export const ContainerContext = React.createContext<{ state: ContainerState; dispatch: React.Dispatch<ContainerAction> }>({
  state: initialState,
  dispatch: () => null
});

const Container: React.FC = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, isError, data }: QueryResult<FootballInfo> = useQuery('ff_request', async () => {
    const res: AxiosResponse<FootballInfo> = await axios.get<FootballInfo>('football-stuff');
    return res.data;
  });

  console.log('here is the data', data);

  return (
    <>
      {(isLoading || isError) && !data && (
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
      {data && !isLoading && !isError && (
        <ContainerContext.Provider value={{ state, dispatch }}>
          <div className={classes.root}>
            <FilterCard teams={data.teams} positions={data.element_types} />
            <PlayerGridView players={data.elements} teams={data.teams} positions={data.element_types} />
          </div>
        </ContainerContext.Provider>
      )}
    </>
  );
};

export default memo(Container);
