import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css_files/sidebar.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { BiBookAlt } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';

export default function Sidebar() {
  return (
    <div>
        <Menu>
        <Link to='/'>
        <FaHome style={{ paddingRight: '5px', margin: 0}} />Home
        </Link>
        <Link className="menu-item" to="/about">
            <FcAbout style={{ paddingRight: '5px', margin: 0 }} />About
        </Link>
        {/* <Link className="menu-item" to="/education-and-experience">
            <BiBookAlt style={{ paddingRight: '5px', margin: 0 }} />Education and Experience
        </Link> */}
        <Link className="menu-item" to="/projects">
            <MdComputer style={{ paddingRight: '5px', margin: 0 }} />Projects
        </Link>
        </Menu>
        
    </div>
  );
};
