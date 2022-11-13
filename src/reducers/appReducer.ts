import {combineReducers} from 'redux';
import countsReducer, {CounterState} from '../modules/counterSlice';

export interface AppState {
  counter: CounterState;
}

export const appReducer = combineReducers<AppState>({
  counter: countsReducer,
});
