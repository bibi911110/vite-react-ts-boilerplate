import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';
import rootSaga from './saga';

const createStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [sagaMiddleware];

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
        devTools: process.env.NODE_ENV !== 'production',
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export const store = createStore();

export type AppDisptach = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
