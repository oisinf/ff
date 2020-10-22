import React from 'react';
import { Container, Header } from '../index';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '99vw',
      height: '100vh',
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: 10,
      padding: 4,
      paddingTop: 16
    }
  })
);

const Root: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Container />
    </div>
  );
};

export default React.memo(Root);
