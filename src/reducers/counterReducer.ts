import {CounterAction, CounterActionType} from '../actions/Counter';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case CounterActionType.CLEAR_COUNT:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
