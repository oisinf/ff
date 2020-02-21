import React from "react";
import { HeaderUI, FFListUI } from "./Components";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const App: React.FC = () => {
  return (
    <ContainerDiv>
      {/* <HeaderUI /> */}
      <FFListUI />
    </ContainerDiv>
  );
};

export default App;
