import React from "react";
import styled from "styled-components";
import { Header, Container } from "./components";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache: QueryCache = new QueryCache();

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ContainerDiv>
        <Header />
        <Container />
      </ContainerDiv>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  );
};

export default App;
