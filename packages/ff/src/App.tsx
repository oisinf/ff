import React from "react";
import styled from "styled-components";
import { HeaderUI, FFListUI } from "./Components";

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const App: React.FC = () => {
  return (
    <ContainerDiv>
      <HeaderUI />
      <FFListUI />
    </ContainerDiv>
  );
};

export default App;
