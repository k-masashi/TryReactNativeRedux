import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../reducers/appReducer';
import {incrementCount, clearCount} from '../modules/counterSlice';

export const Counter = () => {
  const count = useSelector<AppState, number>(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.countText}>{count || 0}</Text>
        <View style={styles.buttons}>
          <Button
            title="Increment"
            onPress={() => {
              dispatch(incrementCount());
            }}
          />
          <Button
            title="Clear"
            onPress={() => {
              dispatch(clearCount());
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  countText: {
    flex: 0.2,
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'black',
  },
  buttons: {
    flex: 0.2,
    flexDirection: 'row',
  },
});
