import { createStyles, FormControl, InputLabel, MenuItem, Paper, Select, Theme } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PosInfo, TeamInfo } from '../PlayerGridView/PlayerGridView';

import { labels } from '../../assets/labels/labels';
import { RootState } from '../../configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition, setStat, setTeam } from '../../slices/playerInfoSlice';

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

  const dispatch = useDispatch();
  const { position, team, stat } = useSelector((state: RootState) => state.container);
  return (
    <Paper className={classes.root}>
      <FormControl className={classes.formControl} data-qa="filter_position">
        <InputLabel className={classes.label}>Position</InputLabel>
        <Select value={position} onChange={e => dispatch(setPosition({ position: e.target.value as string | number }))}>
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
      <FormControl className={classes.formControl} data-qa="filter_team">
        <InputLabel className={classes.label}>Team</InputLabel>
        <Select
          value={team}
          onChange={e =>
            dispatch(
              setTeam({
                team: e.target.value as string | number
              })
            )
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
      <FormControl className={classes.formControl} data-qa="filter_stats">
        <InputLabel className={classes.label}>Stat</InputLabel>
        <Select value={stat} onChange={e => dispatch(setStat({ stat: e.target.value as string | undefined }))}>
          <MenuItem value={undefined}>None</MenuItem>
          {labels.map(val => (
            <MenuItem key={val.key} value={val.key}>
              {val.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default React.memo(FilterCard);
