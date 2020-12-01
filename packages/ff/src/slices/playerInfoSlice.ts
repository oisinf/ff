import { PlayerModalInfo } from '../components/PlayerInfoModal/PlayerModal';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ContainerState = {
  position: number | string;
  team: number | string;
  stat: string | undefined;
  playerModalInfo: PlayerModalInfo;
};

export const VALUE_ALL = 'All';

interface SetPositionAction {
  position: number | string;
}

interface SetTeamAction {
  team: number | string;
}

interface SetPlayerModalAction {
  modalInfo: PlayerModalInfo;
}

interface SetPlayerStat {
  stat: string | undefined;
}

export const initialState: ContainerState = {
  position: VALUE_ALL,
  team: VALUE_ALL,
  stat: undefined,
  playerModalInfo: {
    isModalOpen: false,
    playerInfo: null
  }
};

const playerInfoSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {
    setPosition(state: ContainerState, action: PayloadAction<SetPositionAction>) {
      state.position = action.payload.position;
    },
    setTeam(state: ContainerState, action: PayloadAction<SetTeamAction>) {
      state.team = action.payload.team;
    },
    setStat(state: ContainerState, action: PayloadAction<SetPlayerStat>) {
      state.stat = action.payload.stat;
    },
    setPlayerModalInfo(state: ContainerState, action: PayloadAction<SetPlayerModalAction>) {
      state.playerModalInfo = action.payload.modalInfo;
    }
  }
});

export const { setPlayerModalInfo, setTeam, setPosition, setStat } = playerInfoSlice.actions;
export default playerInfoSlice.reducer;
