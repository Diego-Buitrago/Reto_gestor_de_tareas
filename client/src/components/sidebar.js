import React from "react";
import "../styles/sidebar.css";

function Sidebar(props) {

  return (
    <div className="sidebar mt-4 ml-4">
      <ul className="list-group list-group-flush  ">
        
        <a href="nuevaTarea" className="list-group-item h5 actived font-weight-normal">Nueva tarea</a>
        <a href="tareas" className="list-group-item h5 actived font-weight-normal">Tareas</a>
        <a href="logout" className="list-group-item h5 actived font-weight-normal">Cerrar sesion</a>
      </ul>
    </div>
  );
}

export default Sidebar;
