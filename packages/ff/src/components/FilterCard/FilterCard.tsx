import { createStyles, FormControl, InputLabel, MenuItem, Paper, Select, Theme } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PosInfo, TeamInfo } from '../PlayerGridView/PlayerGridView';

export type FilterCardProps = {
  teams: Array<TeamInfo>;
  positions: Array<PosInfo>;
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

const FilterCard: React.FC<FilterCardProps> = ({ teams, positions }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Position</InputLabel>
        <Select>
          <MenuItem value="test">Test</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Team</InputLabel>
        <Select>
          <MenuItem value="test">Test</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label}>Stat</InputLabel>
        <Select>
          <MenuItem value="test">Test</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default React.memo(FilterCard);
