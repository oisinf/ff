export interface FFListState {
  count: number;
}

export type FFAction =
  | {type: "INCREMENT"; payload: number}
  | {type: "DECREMENT"; payload: number};

export const INITIAL_STATE: FFListState = {
  count: 0
};
