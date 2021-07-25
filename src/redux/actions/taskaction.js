import { ActionTypes } from "../actiontypes/actiontypes";

export const settask = (task) => {
  return {
    type: ActionTypes.SET_TASK,
    payload: task,
  };
};
export const removetask = (task) => {
  return {
    type: ActionTypes.REMOVE_TASK,
    payload:task,
  };
};
export const edittask=(task)=>{
  return {
    type: ActionTypes.UPDATE_TASK,
    payload:task,
  }
}