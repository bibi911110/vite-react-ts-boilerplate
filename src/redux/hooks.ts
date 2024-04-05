import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { type AppDisptach, type RootState } from './store';

export const useAppDispatch: () => AppDisptach = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
