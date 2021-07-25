import React,{useState} from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import {useParams,Link} from "react-router-dom";
import {edittask} from '../redux/actions/taskaction';
function Edittask() {
    const [taskdescription, settaskdescription] = useState(" ");
    const [time, settime] = useState(" ");
    const [date, setdate] = useState(" ");
    const [assigneduser, setassigneduser] = useState(" ");
    const params=useParams();
    const dispatch = useDispatch();
    //console.log("params",params.id)
    const tasks = useSelector((state) => state.alltask);
    console.log(tasks);
    const currenttask=tasks.filter((task)=>task.id===params.id);
    console.log(currenttask);
    const edittotask = () => {

        dispatch(edittask({
            id:Date.now(),
            taskdescription: taskdescription,
            date: date,
            time: time,
            assigneduser: assigneduser,
        }));
    }
    return (
        <div>

        <div className="tasks">
            {currenttask ?(
                <>
                <h5>Task description</h5>
                <input calssname="desinp" type="text" name="taskdescription" value={taskdescription} onChange={(e) => settaskdescription(e.target.value)} />
    
                <h5>Date</h5>
                <input type="Date" name="date" value={date} onChange={(e) => setdate(e.target.value)} />
    
                <h5>Time</h5>
                <input type="time" name="time" value={time} onChange={(e) => settime(e.target.value)} />
    
                <h5>AssignedUser</h5>
                <input type="text" name="assigneduser" value={assigneduser} onChange={(e) => setassigneduser(e.target.value)} />
                <div className="buttons">
                    <button>Cancel</button>
                    <Link to="/Task">
                        <button className="savebut" type="submit" onClick={edittotask}>Save</button>
                    </Link>
    
                </div>
    
                </>
                ):
                <h2>No data of id{`${currenttask.id}`}</h2>}
            
                </div>

    </div>
    )
}

export default Edittask
