import { createStyles, FormControl, InputLabel, MenuItem, Paper, Select, Theme } from '@material-ui/core';
import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PosInfo, TeamInfo } from '../PlayerGridView/PlayerGridView';
import reducer, { ContainerActionTypes, ContainerState, initialState } from '../../reducers/ContainerReducer';
export type FilterCardProps = {
  teams: Array<TeamInfo>;
  positions: Array<PosInfo>;
  store: ContainerState;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'fit-content',
      backgroundColor: theme.palette.primary.main,
      padding: '8px',
      borderRadius: '10px',
      margin: '0 auto 24px auto'
    },
    formControl: {
      backgroundColor: theme.palette.secondary.light,
      minWidth: '200px',
      marginRight: '16px',
      marginLeft: '16px',
      borderRadius: '10px',
      padding: '0px 16px 8px 16px'
    },
    label: {
      padding: 'inherit'
    }
  })
);

const FilterCard: React.FC<FilterCardProps> = ({ teams, positions, store }) => {
  const classes = useStyles();
  const [reducerState, dispatch] = useReducer(reducer, store);
  return (
    <Paper className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Position</InputLabel>
        <Select
          value={reducerState.position}
          onChange={e =>
            dispatch({
              type: ContainerActionTypes.POSITION,
              payload: e.target.value === 'All' ? (e.target.value as string) : (e.target.value as number)
            })
          }
        >
          <MenuItem value={'All'}>All</MenuItem>
          {positions &&
            positions.map((p, i) => {
              return (
                <MenuItem key={i} value={p.id}>
                  {p.singular_name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Team</InputLabel>
        <Select
          value={reducerState.team}
          onChange={e =>
            dispatch({
              type: ContainerActionTypes.TEAM,
              payload: e.target.value === 'All' ? (e.target.value as string) : (e.target.value as number)
            })
          }
        >
          <MenuItem value={'All'}>All</MenuItem>
          {teams &&
            teams.map((t, i) => {
              return (
                <MenuItem key={i} value={t.id}>
                  {t.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Stat</InputLabel>
        <Select value={''}>
          <MenuItem value="test">Test</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default React.memo(FilterCard);
