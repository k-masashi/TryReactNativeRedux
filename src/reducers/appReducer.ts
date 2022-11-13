import {combineReducers} from 'redux';
import {counterReducer, CounterState} from './counterReducer';

export interface AppState {
  counter: CounterState;
}

export const appReducer = combineReducers<AppState>({
  counter: counterReducer,
});
