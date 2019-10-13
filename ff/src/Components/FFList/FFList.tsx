import React, {useEffect} from "react";
import {getFantasyFootballData} from "./actions";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {selectPlayerStatsLabels, selectPlayerPositionInfo} from "./selectors";
import {StatsLabels, PlayerPositionInfo} from "./constants";

const FFList = () => {
  const dispatch = useDispatch();

  const labels: Array<StatsLabels> = useSelector(
    (state: any) => selectPlayerStatsLabels(state),
    shallowEqual
  );

  const positionInfo: Array<PlayerPositionInfo> = useSelector((state: any) =>
    selectPlayerPositionInfo(state)
  );

  useEffect(() => {
    dispatch(getFantasyFootballData());
  }, [dispatch]);

  console.log("labels + positionInfo", labels, positionInfo);
  return (
    <>
      {labels ? (
        <div data-qa="Info Table"></div>
      ) : (
        <div data-qa>Error Loading Info</div>
      )}
    </>
  );
};

export default FFList;
