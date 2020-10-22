import React from 'react';
import { Root } from './components';
import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme';

const queryCache: QueryCache = new QueryCache();

const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <Root />
        <ReactQueryDevtools initialIsOpen />
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
};

export default App;
