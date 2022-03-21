const redux = require('redux');

// create a reducer that will check the action type and return the new state based on the action type and the current state of the store
const counterReducer = (prevState = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: prevState.counter + 1 // increment the previous counter state by 1
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: prevState.counter - 1
    };
  }

  return prevState; // if the action type is not found, return the previous state
};

// Create a store with the reducer and the initial state of the counter to 0
const store = redux.createStore(counterReducer);

// create a function that will subscribe to the store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe to the store and call the function counterSubscriber
store.subscribe(counterSubscriber);

// dispatch the action to the reducer to increment and decrement
store.dispatch({ type: 'INCREMENT' }); // 1
store.dispatch({ type: 'INCREMENT' }); // 2
store.dispatch({ type: 'DECREMENT' }); // 0
