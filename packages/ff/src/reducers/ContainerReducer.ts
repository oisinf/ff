import { PlayerModalInfo } from '../components/PlayerInfoModal/PlayerModal';

export type ContainerState = {
  position: number | string;
  team: number | string;
  stat: string | undefined;
  playerModalInfo: PlayerModalInfo;
};

export type ContainerAction = SetPositionAction | SetTeamAction | SetPlayerModalAction | SetPlayerStat;

export const VALUE_ALL = 'All';

export enum ContainerActionTypes {
  POSITION = 'setPosition',
  TEAM = 'setTeam',
  STAT = 'setStat',
  OPEN_PLAYER_MODAL = 'openPlayerModal'
}

interface SetPositionAction {
  type: typeof ContainerActionTypes.POSITION;
  payload: number | string;
}

interface SetTeamAction {
  type: typeof ContainerActionTypes.TEAM;
  payload: number | string;
}

interface SetPlayerModalAction {
  type: typeof ContainerActionTypes.OPEN_PLAYER_MODAL;
  payload: PlayerModalInfo;
}

interface SetPlayerStat {
  type: typeof ContainerActionTypes.STAT;
  payload: string | undefined;
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

const reducer = (state: ContainerState, action: ContainerAction): ContainerState => {
  switch (action.type) {
    case ContainerActionTypes.POSITION:
      return { ...state, position: action.payload };
    case ContainerActionTypes.TEAM:
      return { ...state, team: action.payload };
    case ContainerActionTypes.OPEN_PLAYER_MODAL:
      return { ...state, playerModalInfo: action.payload };
    case ContainerActionTypes.STAT:
      return { ...state, stat: action.payload };
    default:
      return initialState;
  }
};

export default reducer;
