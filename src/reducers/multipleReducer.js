import reducerFunction  from './Reducer.js'
import { combineReducers } from 'redux';

let rootReducer = combineReducers({
    reducerFunction:reducerFunction
})
export default rootReducer;