import { PlayerModalInfo } from '../components/PlayerInfoModal/PlayerModal';

export type ContainerState = { position: number | string; team: number | string; playerModalInfo: PlayerModalInfo };
export type ContainerAction = { type: string; payload: number | string };

export const VALUE_ALL = 'All';

export enum ContainerActionTypes {
  POSITION = 'setPosition',
  TEAM = 'setTeam'
}
export const initialState: ContainerState = {
  position: VALUE_ALL,
  team: VALUE_ALL,
  playerModalInfo: {
    isModalOpen: false,
    playerInfo: null
  }
};

const reducer = (state: ContainerState, action: ContainerAction): ContainerState => {
  switch (action.type) {
    case ContainerActionTypes.POSITION:
      return { ...state, position: action.payload };
    case ContainerActionTypes.TEAM:
      return { ...state, team: action.payload };
    default:
      return initialState;
  }
};

export default reducer;
