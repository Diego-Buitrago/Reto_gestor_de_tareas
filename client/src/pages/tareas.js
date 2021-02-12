import React from "react";
import "../styles/tareas.css";

import { withRouter } from "react-router-dom";


const tareas = () => {
    return (
        <div className="container">
            <a href="nuevaTarea">
                    <h4>Nueva tarea</h4>
            </a>
           
        </div>
    );
};

export default withRouter(tareas); 