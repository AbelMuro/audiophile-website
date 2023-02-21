import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore, 
    persistReducer, 
    FLUSH,                                                                       
    REHYDRATE,                                                                      
    PAUSE,                                                                         
    PERSIST,                                                                        
    PURGE,                                                                          
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CartReducer from './Reducers';

const persistConfig = {key: 'root', storage};
const persistedReducer = persistReducer(persistConfig, CartReducer);

export const Store = configureStore({                      
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER]}})
})

export const persistedStore = persistStore(Store);