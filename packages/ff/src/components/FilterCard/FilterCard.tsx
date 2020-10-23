import { createStyles, FormControl, InputLabel, MenuItem, Paper, Select, Theme } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PosInfo, TeamInfo } from '../PlayerGridView/PlayerGridView';
import { ContainerActionTypes, VALUE_ALL } from '../../reducers/ContainerReducer';
import { ContainerContext } from '../Container/Container';
export type FilterCardProps = {
  teams: Array<TeamInfo>;
  positions: Array<PosInfo>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'fit-content',
      backgroundColor: theme.palette.primary.main,
      padding: 8,
      borderRadius: 10,
      margin: '0 auto 24px auto',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    formControl: {
      backgroundColor: theme.palette.secondary.light,
      minWidth: 200,
      borderRadius: 10,
      margin: '4px 16px 4px 16px',
      padding: '0px 16px 8px 16px'
    },
    label: {
      padding: 'inherit'
    }
  })
);

const FilterCard: React.FC<FilterCardProps> = ({ teams, positions }) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(ContainerContext);
  return (
    <Paper className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Position</InputLabel>
        <Select
          value={state.position}
          onChange={e =>
            dispatch({
              type: ContainerActionTypes.POSITION,
              payload: e.target.value === VALUE_ALL ? (e.target.value as string) : (e.target.value as number)
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
          value={state.team}
          onChange={e =>
            dispatch({
              type: ContainerActionTypes.TEAM,
              payload: e.target.value === VALUE_ALL ? (e.target.value as string) : (e.target.value as number)
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
      {/*    <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Stat</InputLabel>
        <Select value={''}>
          <MenuItem value="test">Test</MenuItem>
        </Select>
      </FormControl>*/}
    </Paper>
  );
};

export default React.memo(FilterCard);
