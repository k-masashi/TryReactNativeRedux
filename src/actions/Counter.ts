// Action

export enum CounterActionType {
  INCREMENT_COUNT = 'INCREMENT_COUNT',
  CLEAR_COUNT = 'CLEAR_COUNT',
}

export interface CounterAction {
  type: CounterActionType;
}

// Action Creater

export const incrementCount = (): CounterAction => ({
  type: CounterActionType.INCREMENT_COUNT,
});

export const clearCount = (): CounterAction => ({
  type: CounterActionType.CLEAR_COUNT,
});

export type Action = ReturnType<typeof incrementCount | typeof clearCount>;
