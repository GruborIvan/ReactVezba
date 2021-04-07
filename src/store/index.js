import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware,logger),  
);

sagaMiddleware.run(rootSaga);

export default store;