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
import RootReducer from './Reducers';

const persistConfig = {key: 'root', storage};
const persistedReducer = persistReducer(persistConfig, RootReducer);


export const Store = configureStore({                      
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [PERSIST]}})
})

export const persistedStore = persistStore(Store);