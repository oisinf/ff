import React, { memo } from "react";
import styled from "styled-components";
import { QueryResult, useQuery } from "react-query";
import axios from "axios";

const FFInfoContainer = styled.div`
  margin:30px
  background-color: rgb(55,0,66);
  border-radius:10px;
  display: flex;
	flex-direction: column;
`;

const FFContainer: React.FC = () => {
  const { isLoading, isError, data }: QueryResult<unknown> = useQuery(
    "ff_request",
    async () => {
      return await axios.get("football-stuff");
    }
  );

  // @ts-ignore
  console.log("here is the data", data?.data as string);
  return (
    <>
      {isLoading ? (
        <div>Loading data...</div>
      ) : isError ? (
        <div>Error loading data...</div>
      ) : (
        <FFInfoContainer data-testid="ff-info"></FFInfoContainer>
      )}
    </>
  );
};

export default memo(FFContainer);
