import { delay, put, call, takeEvery } from 'redux-saga/effects';
import { type SagaIterator } from 'redux-saga';
import { type PayloadAction } from '@reduxjs/toolkit';

import { userActions } from './slice';

export function* onIncrementAsync(): SagaIterator {
    yield delay(100);
    yield put(userActions.increment);
}

export function* onIncrementByAmountAsync(action: PayloadAction<number>): SagaIterator {
    try {
        const result: number = yield call(() => {
            console.log(action);
        });

        yield put(userActions.incrementByAmountAsyncSuccess(result));
    } catch (error) {
        console.log(error);
        yield put(userActions.incrementByAmountAsyncFailure());
    }
}

export function* watchUserSagas(): SagaIterator {
    yield takeEvery(userActions.incrementAsync, onIncrementAsync);
    yield takeEvery(userActions.incrementByAmountAsync, onIncrementByAmountAsync);
}

const userSagas = watchUserSagas;
export default userSagas;
