import { useEffect } from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

interface AxiosMockProps {
  children: JSX.Element;
  mock: (adapter: MockAdapter) => void;
}

const apiMock = new MockAdapter(axios);

const AxiosMock = ({ children, mock }: AxiosMockProps) => {
  useEffect(() => {
    mock(apiMock);
    return () => {
      apiMock.reset();
    };
  });
  return children;
};

export default AxiosMock;
