import {combineReducers} from 'redux';
import storeReducer from '../reducers/storeReducer';

export default combineReducers({
    storeContext: storeReducer
});