import {ItemsReducer, OpenCartReducer} from './Reducers.js';
import {combineReducers} from 'redux';

const Reducer = combineReducers({
    cart: ItemsReducer,
    open: OpenCartReducer
})

export default Reducer;