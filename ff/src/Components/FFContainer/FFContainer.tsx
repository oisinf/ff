import React, {useEffect, memo} from "react";
import {getFantasyFootballData} from "./actions";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {
  selectPlayerStatsLabels,
  selectPlayerPositionInfo,
  SelectPlayers,
  selectGameSettings,
  selectPhases
} from "./selectors";
import {
  StatsLabels,
  PositionInfo,
  PlayerInfo,
  GameSettings,
  Phases
} from "./constants";
import styled from "styled-components";

const FFInfoContainer = styled.div`
  margin:30px
  background-color: rgb(55,0,66);
  border-radius:10px;
  display: flex;
	flex-direction: column;
`;

const FFContainer: React.FC = () => {
  const dispatch = useDispatch();

  let labels: Array<StatsLabels> | false = useSelector(
    (state: any) => selectPlayerStatsLabels(state),
    shallowEqual
  );
  // let positionInfo: Array<PositionInfo> | false = useSelector((state: any) =>
  //   selectPlayerPositionInfo(state)
  // );
  // let players: Array<PlayerInfo> | false = useSelector((state: any) =>
  //   SelectPlayers(state)
  // );
  // let settings: GameSettings | false = useSelector((state: any) =>
  //   selectGameSettings(state)
  // );
  // let phases: Array<Phases> | false = useSelector((state: any) =>
  //   selectPhases(state)
  // );
  useEffect(() => {
    dispatch(getFantasyFootballData());
  }, [dispatch]);
  return (
    <>
      {labels ? (
        <FFInfoContainer data-testid="ff-info"></FFInfoContainer>
      ) : (
        <div data-testid="error-message">Error Loading Info</div>
      )}
    </>
  );
};

export default memo(FFContainer);
