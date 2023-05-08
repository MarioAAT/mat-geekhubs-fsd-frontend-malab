
import { configureStore } from '@reduxjs/toolkit';


import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import detailSlice from '../layouts/userDetail/detailSlice';
import userSlice from '../layouts/userDetail/userSlice';
import reservaSlice from '../layouts/userDetail/reservaSlice';

const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice,
    reserva: reservaSlice
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});