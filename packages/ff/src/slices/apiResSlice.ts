import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FootballInfo } from '../components/Container/Container';
import { PlayerInfo } from '../components/PlayerGridView/PlayerGridView';

const initialState: FootballInfo = {
  elements: [],
  element_types: [],
  teams: []
};

export const apiResponseSlice = createSlice({
  name: 'apiResponse',
  initialState,
  reducers: {
    setContainerState(state, action: PayloadAction<FootballInfo>) {
      state.teams = action.payload.teams;
      state.element_types = action.payload.element_types;
      state.elements = action.payload.elements;
    },
    setElements(state, action: PayloadAction<PlayerInfo[]>) {
      state.elements = action.payload;
    }
  }
});

export const { setContainerState, setElements } = apiResponseSlice.actions;
export default apiResponseSlice.reducer;
