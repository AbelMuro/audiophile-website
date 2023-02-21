import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CartReducer from './Reducers';


/* write redux-persist into your notes today, and also write notes about serializable values
    serializable values means you can use JSON.parse(JSON.stringify()) WITHOUT losing data
    non-serializable values means that you will lose some data if you use JSON.parse(JSON.stringify())

*/

const persistConfig = {key: 'root', storage};
const persistedReducer = persistReducer(persistConfig, CartReducer);

export const Store = configureStore({                      
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
})

export const persistedStore = persistStore(Store);