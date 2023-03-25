import React, {useState} from 'react'
import './sidebar.css'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import { IconContext } from 'react-icons';

export default function Sidebar() {
    const [sidebar, setSidebar]= useState(false)

    const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
        <IconContext.Provider value={{color:'fff'}}>
        <div className="sidebar">
            <Link to="#" className='menu-bars'>
            <FaBars onClick={showSidebar} />
            </Link>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}> 
                                {item.icon}
                                <span>{item.title}</span>
                                    </Link></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        </IconContext.Provider>
        
    </div>
  )
}
