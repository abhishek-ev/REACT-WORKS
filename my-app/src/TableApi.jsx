import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TableApi() {
    const [first, setfirst] = useState([])
    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/todos").then((display)=>{
        // console.log(display)
        setfirst(display.data)
     })
     .catch((error) => {
        console.error("Error fetching data:", error);
    });
    }, [])
    
  return (
    <div>
     
        <table>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>UserId</th>
            <th>Completed</th>
        </tr>
        {first.map((item)=>(
        <tr>
<td>{item.id}</td>
<td>{item.title}</td>
<td>{item.userId}</td>
<td>{item.completed.toString()}</td>
        </tr>
         ))}
        </table>
     
    </div>
  )
}

export default TableApi
