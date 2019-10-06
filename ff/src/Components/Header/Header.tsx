import React from "react";
import {Typography} from "@material-ui/core";
import styled from "styled-components";

const StyledHeader = styled(Typography)`
  margin: auto !important;
  width: min-content;
`;
export default () => {
  return <StyledHeader variant="h3">Fantasy Football</StyledHeader>;
};
