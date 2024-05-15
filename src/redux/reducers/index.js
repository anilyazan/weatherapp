import weatherReducer from "./weatherReducers";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    weather: weatherReducer,
});
 export default rootReducer;