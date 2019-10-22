import React, {useEffect} from "react";
import {getFantasyFootballData} from "./actions";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {selectPlayerStatsLabels, selectPlayerPositionInfo} from "./selectors";
import {StatsLabels, PlayerPositionInfo} from "./constants";

const FFContainer = () => {
  const dispatch = useDispatch();

  let labels: Array<StatsLabels> = useSelector(
    (state: any) => selectPlayerStatsLabels(state),
    shallowEqual
  );
  let positionInfo: Array<PlayerPositionInfo> = useSelector((state: any) =>
    selectPlayerPositionInfo(state)
  );
  useEffect(() => {
    dispatch(getFantasyFootballData());
  }, [dispatch]);

  console.log("labels + positionInfo", labels, positionInfo);
  return (
    <>
      {labels ? (
        <div data-testid="ff-info"></div>
      ) : (
        <div data-testid="error-message">Error Loading Info</div>
      )}
    </>
  );
};

export default FFContainer;
