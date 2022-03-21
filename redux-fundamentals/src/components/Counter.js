import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value); // get the counter value from redux.js 
  const show = useSelector(state => state.counter.showCounter) // get the value of showCounter boolean

  const incrementHandler = () => {
    // dispatch({ type: 'INCREMENT' }); // dispatch/send the action type to the redux.js

    dispatch(counterActions.increment()); // call the function method from counterActions.js to dispatch the action type to the redux.js
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 }); // dispatch/sent action type and amount value to redux.js

    dispatch(counterActions.increase(5)); // call the function method with the value
  }

  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' });

    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' })

    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment + 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
