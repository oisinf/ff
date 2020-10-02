import React, { memo } from "react";
import { QueryResult, useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { PlayerGridView } from "../index";
import { PlayerInfo } from "../PlayerGridView/PlayerGridView";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "30px",
      borderRadius: "10p",
      display: "flex",
      flexDirection: "column"
    }
  })
);

export type FootballInfo = {
  elements: Array<PlayerInfo>;
};

const Container: React.FC = () => {
  const classes = useStyles();

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
        <div className={classes.root} data-testid="ff-info">
          <PlayerGridView players={data.elements} />
        </div>
      )}
    </>
  );
};

export default memo(Container);
