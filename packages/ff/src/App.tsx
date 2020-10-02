import React from "react";
import { Header, Container } from "./components";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { createStyles, ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";
import { makeStyles } from "@material-ui/core/styles";

const queryCache: QueryCache = new QueryCache();

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <Container />
        </div>
        <ReactQueryDevtools initialIsOpen />
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
};

export default App;
