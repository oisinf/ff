import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';
import { RootState } from '../../src/configureStore';

const ProviderWrapper = ({ children, store }: { children: ReactNode; store: Store<RootState, AnyAction> }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
