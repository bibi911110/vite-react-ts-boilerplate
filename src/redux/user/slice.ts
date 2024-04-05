import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IUserSlice {
    count: number;
}

const initialState: IUserSlice = {
    count: 0,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        incrementAsync: (_state) => {},
        incrementByAmountAsync: (_state, _action: PayloadAction<number>) => {},
        incrementByAmountAsyncSuccess: (_state, _action: PayloadAction<number>) => {},
        incrementByAmountAsyncFailure: (_state) => {},
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
