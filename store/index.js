import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/user';

// combine all reducer and stored in allReducers
const allReducers = combineReducers({
    user: userReducer,
});

// create one store and save all data in the store 
const store = createStore(allReducers);

export default store;
