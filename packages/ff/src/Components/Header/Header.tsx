import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledHeader = styled(Typography)`
  margin: auto !important;
  width: 50%;
  background-color: rgb(55, 0, 66);
  color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;
export default () => {
  return <StyledHeader variant="h3">Fantasy Football</StyledHeader>;
};
