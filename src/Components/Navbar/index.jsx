import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-content'>
                <li className='nav-item space-between_item link-item'>Home</li>
                <li className='nav-item space-between_item link-item'>SOP</li>
                <li className='nav-item space-between_item link-item'>People</li>
                <li className='nav-item space-between_item link-item'>Time Management</li>
                <li className='nav-item space-between_item link-item'>Projects</li>
            </ul>

            <ul className='nav-content'>
                <li className='nav-item destructive'>Logout</li>
                <li>
                        <figure className='profilePicture'>
                            <img className='rounded-photo' src='https://images.pexels.com/photos/1381112/pexels-photo-1381112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Profile photo'/>
                        </figure> 
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;