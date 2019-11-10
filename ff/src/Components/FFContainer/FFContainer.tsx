import React, {useEffect} from "react";
import {getFantasyFootballData} from "./actions";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {
  selectPlayerStatsLabels,
  selectPlayerPositionInfo,
  SelectPlayers
} from "./selectors";
import {StatsLabels, PositionInfo, PlayerInfo} from "./constants";

const FFContainer = () => {
  const dispatch = useDispatch();

  let labels: Array<StatsLabels> | false = useSelector(
    (state: any) => selectPlayerStatsLabels(state),
    shallowEqual
  );
  let positionInfo: Array<PositionInfo> | false = useSelector((state: any) =>
    selectPlayerPositionInfo(state)
  );
  let players: Array<PlayerInfo> | false = useSelector((state: any) =>
    SelectPlayers(state)
  );
  useEffect(() => {
    dispatch(getFantasyFootballData());
  }, [dispatch]);
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
