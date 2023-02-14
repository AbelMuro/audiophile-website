import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './Reducers';

const Store = configureStore({                      //this will create the store with a reducer
    reducer: CartReducer
})

export default Store;