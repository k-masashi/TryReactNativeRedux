import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incrementCount: state => {
      return (
        {
          ...state,
          count: state.count + 1,
        }
      )
    },
    clearCount: state => ({
      ...state,
      count: 0,
    }),
  },
});

export const { incrementCount, clearCount } = counterSlice.actions;
export default counterSlice.reducer;
