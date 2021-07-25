import { ActionTypes } from "../actiontypes/actiontypes";
const tasks=[];
 
export const taskreducers = (state = tasks, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASK:
      return [...state, payload ];
    case ActionTypes.REMOVE_TASK:
      const index=state.findIndex((task)=>task.taskdescription===payload.taskdescription);
      // console.log(payload.id);
      // console.log("index",index);
        let newcart=[...state];
        if(index>=0){
          newcart.splice(index,1);
        }
        else{
          console.warn(`cant remove`);
        }
        return state=newcart;  
    default:
      return state;
  }
};
export const editreducer=(state=tasks,{type,payload})=>{
  switch(type){
    case ActionTypes.UPDATE_TASK:
      const update=state.map((item)=>item.id===payload.id ?payload:tasks)
     state=update;
      return state;
    default :
      return state;
  }
};
