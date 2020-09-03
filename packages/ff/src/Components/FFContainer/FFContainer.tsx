import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";
import { getFantasyFootballData } from "./actions";
import {
  selectPlayerStatsLabels,
  selectPlayerPositionInfo,
  SelectPlayers,
  selectGameSettings,
  selectPhases,
  selectTeams
} from "./selectors";
import {
  StatsLabels,
  PositionInfo,
  PlayerInfo,
  GameSettings,
  Phases, Team
} from "./constants";

const FFInfoContainer = styled.div`
  margin:30px
  background-color: rgb(55,0,66);
  border-radius:10px;
  display: flex;
	flex-direction: column;
`;

const FFContainer: React.FC = () => {
  const dispatch = useDispatch();

  const labels: Array<StatsLabels> | false = useSelector(
    (state: any) => selectPlayerStatsLabels(state),
    shallowEqual
  );
  let positionInfo: Array<PositionInfo> | false = useSelector((state: any) =>
    selectPlayerPositionInfo(state)
  );
  let players: Array<PlayerInfo> | false = useSelector((state: any) =>
    SelectPlayers(state)
  );
  let settings: GameSettings | false = useSelector((state: any) =>
    selectGameSettings(state)
  );
  let phases: Array<Phases> | false = useSelector((state: any) =>
    selectPhases(state)
  );
  let team: Array<Team> | false = useSelector((state: any) =>
    selectTeams(state)
  );
  useEffect(() => {
    dispatch(getFantasyFootballData());
  }, [dispatch]);
  return (
    <>
      {labels ? (
        <FFInfoContainer data-testid="ff-info" />
      ) : (
        <div data-testid="error-message">Error Loading Info</div>
      )}
    </>
  );
};

export default memo(FFContainer);
