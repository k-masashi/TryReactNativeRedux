import {Counter, CounterProps} from '../components/Counter';
import {incrementCount, clearCount} from '../modules/counterSlice';
import {AppState} from '../reducers/appReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state: AppState): CounterProps => ({
  count: state.counter.count,
});

const mapDispatchToProps = {incrementCount, clearCount};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
