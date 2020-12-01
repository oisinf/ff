import React from 'react';
import ProviderWrapper from '../stories/utils/ProviderWrapper';
import { store } from '../src/configureStore';
import { theme } from '../src/Theme';
import { ThemeProvider } from '@material-ui/core';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  Story => (
    <ProviderWrapper store={store}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </ProviderWrapper>
  )
];
