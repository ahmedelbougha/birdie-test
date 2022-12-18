import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import generalReducer from './reducers/general';
import recipientsReducer from './reducers/recipients';
import { watcherSaga } from './sagas';

const rootReducer = combineReducers({
  recipients: recipientsReducer,
  general: generalReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

// the following line to prepare the useSelector to Typescript
export type RootState = ReturnType<typeof rootReducer>;

export default store;
