import {Dispatch} from 'redux';
import {clearCount, CounterAction, incrementCount} from '../actions/counter';
import {Counter, CounterProps} from '../components/Counter';
import {AppState} from '../reducers/appReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state: AppState): CounterProps => ({
  count: state.counter.count,
});

interface DispatchProps {
  incrementCount: () => void;
  clearCount: () => void;
}

const mapDispatchToProps = (
  dispatch: Dispatch<CounterAction>,
): DispatchProps => ({
  incrementCount: () => {
    dispatch(incrementCount());
  },
  clearCount: () => {
    dispatch(clearCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
