import { combineReducers } from "redux";
import { taskreducers,editreducer } from "./taskreducers";
const reducers = combineReducers({
  alltask: taskreducers,
  removetask:taskreducers,
  edittask:editreducer,

});
export default reducers;