import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(true);
  }

  const closeMenu = () => {
    setOpenMenu(false);
  }

  return (
    <>
      <Sidebar
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      <div className='container-navbar'>
        {
          !openMenu
            ?
            <span onClick={showMenu}><FontAwesomeIcon icon={faBars} /></span>
            :
            <span onClick={closeMenu}><FontAwesomeIcon icon={faTimes} className="navbar-times-icon" /></span>
        }
      </div>
    </>
  )
}

export default Navbar;
