import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { songsReducer } from './Songs/SongsReducer';

const Store = configureStore({
    reducer: songsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;