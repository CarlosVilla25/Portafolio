import React from 'react';
import { Link } from 'gatsby';

const Sidebar = ({ openMenu }) => {

  return (
    <div className={!openMenu ? "sidebar-container close" : "sidebar-container"}>
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-ul">
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to='/sobre-mi'>Sobre Mi</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contácto</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Sidebar;
