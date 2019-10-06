import React, {useEffect} from "react";
import {getFantasyFootballData} from "./actions";

const FFList = () => {
  useEffect(() => {
    getFantasyFootballData();
  }, []);
  return <></>;
};

export default FFList;
