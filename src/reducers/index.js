import {combineReducers} from 'redux';
import StopwatchReducer from './reducer_stopwatch';


const rootReducer = combineReducers({
    watches: StopwatchReducer
});

export default rootReducer;
