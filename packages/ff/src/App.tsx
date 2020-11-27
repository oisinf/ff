import React from 'react';
import { Root } from './components';
import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme';
import { store } from './configureStore';
import { Provider } from 'react-redux';

const queryCache: QueryCache = new QueryCache();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ThemeProvider theme={theme}>
          <Root />
          <ReactQueryDevtools />
        </ThemeProvider>
      </ReactQueryCacheProvider>
    </Provider>
  );
};

export default App;
