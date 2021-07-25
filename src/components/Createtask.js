import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { settask } from '../redux/actions/taskaction';
import { Link } from 'react-router-dom';
import "./Createtask.css"

function Createtask() {
    const [taskdescription, settaskdescription] = useState(" ");
    const [time, settime] = useState(" ");
    const [date, setdate] = useState(" ");
    const [assigneduser, setassigneduser] = useState(" ");
    
   
    const dispatch = useDispatch();
    const addtotask = () => {
        dispatch(settask({
            id:Date.now(),
            taskdescription: taskdescription,
            date: date,
            time: time,
            assigneduser: assigneduser,
        }));
    }
    return (
        <div >

            <div name="id" className="tasks"  >
                <h5>Task description</h5>
                <input calssname="desinp" type="text" name="taskdescription" value={taskdescription} onChange={(e) =>settaskdescription(e.target.value)} />

                <h5>Date</h5>
                <input type="Date" name="date" value={date} onChange={(e) => setdate(e.target.value)} />

                <h5>Time</h5>
                <input type="time" name="time" value={time} onChange={(e) => settime(e.target.value)} />

                <h5>AssignedUser</h5>
                <input type="text" name="assigneduser" value={assigneduser} onChange={(e) => setassigneduser(e.target.value)} />
                <div className="buttons">
                    <button>Cancel</button>
                    <Link to="/Task">
                        <button className="savebut" type="submit" onClick={addtotask}>Save</button>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Createtask
