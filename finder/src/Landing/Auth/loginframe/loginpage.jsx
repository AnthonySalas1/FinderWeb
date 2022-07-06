import React, { useState, useEffect } from "react";
import { Apitask } from "../../../services/api";

export default function Loginpage() {

    const [list, setList] = useState([]);
    
    useEffect(() => {
      let mounted = true;
      Apitask()
        .then(
            tasks => {
                if(mounted) {
                    setList(tasks)
                }
            }
        )
    }, [])
    
    return (
      <>
        <div className="wrapper">
          <h1>ITEMS</h1>
          <ul>
            {list.map((task) => (
              <li key={task.titulo}>{task.descripcion}</li>
            ))}
          </ul>
        </div>
      </>
    );
}