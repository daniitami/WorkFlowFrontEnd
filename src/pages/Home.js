import React, {useEffect, useState} from "react";
import axios from "axios";
import Left from "../components/Left";

function Home(){
    
    const[tasks, setTasks] = useState([])
    useEffect(
        ()=>{
            axios.get('http://localhost:3302/tasks')
            .then(
                res => {
                    setTasks(res.data)
                }
            )
            .catch(
                error => console.log(error)
            );
        }
    )
    console.log(tasks)
    
    return(
        <>
            <Left/>
            <h1>Habits</h1>
            <table>
                <thead><th>id</th><th>Nombre</th><th>Desc</th></thead>
            {tasks.map((task, index)=>{
                return <>
                    <tr>
                        <td>{task.id}</td>
                        <td>{task.nametask}</td>
                    </tr>
                </>
            })}
            </table>

        </>
    )
}

export default Home;