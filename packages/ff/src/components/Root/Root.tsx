import React from "react";
import { Container, Header } from "../index";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: "10px"
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
