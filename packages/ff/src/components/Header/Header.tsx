import React from 'react';
import { createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 20,
      marginBottom: 20,
      margin: 'auto',
      width: '50%',
      backgroundColor: theme.palette.primary.main,
      padding: 40,
      borderRadius: 10,
      textAlign: 'center',
      color: theme.palette.primary.contrastText
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography variant="h3" className={classes.root}>
      Fantasy Football
    </Typography>
  );
};

export default Header;
