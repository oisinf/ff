import React, { memo } from "react";
import styled from "styled-components";
import { QueryResult, useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { PlayerGridView } from "../index";
import { PlayerInfo } from "../PlayerGridView/PlayerGridView";

const StyledContainer = styled.div`
  margin:30px
  border-radius:10px;
  display: flex;
	flex-direction: column;
`;

export type FootballInfo = {
  elements: Array<PlayerInfo>;
};

const Container: React.FC = () => {
  const { isLoading, isError, data }: QueryResult<FootballInfo> = useQuery(
    "ff_request",
    async () => {
      const res: AxiosResponse<FootballInfo> = await axios.get<FootballInfo>(
        "football-stuff"
      );
      return res.data;
    }
  );

  console.log("here is the data", data);

  return (
    <>
      {isLoading ||
        (isError && (
          <div>{isLoading ? "Loading Data..." : "Error loading data.."} </div>
        ))}
      {data && (
        <StyledContainer data-testid="ff-info">
          <PlayerGridView players={data.elements} />
        </StyledContainer>
      )}
    </>
  );
};

export default memo(Container);
