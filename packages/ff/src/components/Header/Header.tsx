import React from "react";
import { createStyles, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "auto !important",
      width: "50%",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      padding: "40px",
      borderRadius: "10px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column"
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
