import React from 'react'
import { useSelector } from 'react-redux';
import { removetask } from '../redux/actions/taskaction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Task.css';

function Task() {
    const dispatch = useDispatch();
    
    const tasks = useSelector((state) => state.alltask);
    console.log(tasks);
    function abc(taskdescription){
        dispatch(removetask({taskdescription}))
    }


    return (
        <div>
            {
                tasks.map((task,index) =>
                (
                    <div className="card" key={index}>
                        <div className="cardleft">
                            <h2>{task.taskdescription}</h2>
                            <h3>{task.date}</h3>
                        </div>
                        <div className="cardright">
                            <Link to={`/Edittask/${task.id}`}>
                                <button >Edit</button>
                            </Link>
                            <button onClick={()=>abc(task.taskdescription)}>Remove</button>
                        </div>

                    </div>)
                )
            }
        </div>
    );

}

export default Task;