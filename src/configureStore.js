import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todoApp from './reducers';
// import { loadState, saveState } from './localStorage';
// import throttle from 'lodash/throttle';

// const logger = store => next => {
//   if (!console.group) {
//     return next;
//   }
//   return action => {
//     console.group(action.type);
//     console.log('%c prev state', 'color: gray', store.getState());
//     console.log('%c action', 'color: blue', action);
//     const returnValue = next(action);
//     console.log('%c next state', 'color: green', store.getState());
//     console.groupEnd(action.type);
//     return returnValue;
//   };
// };

// const promise = store => next => action => {
//   if (typeof action.then === 'function') {
//     return action.then(next);
//   }
//   return next(action);
// };

// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//   middlewares
//     .slice()
//     .reverse()
//     .forEach(
//       middleware => (store.dispatch = middleware(store)(store.dispatch))
//     );
// };

// const thunk = store => next => action =>
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action);

const configureStore = () => {
  // const persistedState = loadState();
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  const store = createStore(
    todoApp,
    // persistentState,
    applyMiddleware(...middlewares)
  );

  // wrapDispatchWithMiddlewares(store, middlewares);

  // store.subscribe(
  //   throttle(() => {
  //     saveState({
  //       todos: store.getState().todos,
  //     });
  //   }, 1000)
  // );

  return store;
};

export default configureStore;
