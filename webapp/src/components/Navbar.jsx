import React from 'react';
import "../navbar/Navbar.css";
import dropDown from '../../assets/icons/drop_down_icon.png'

<<<<<<< HEAD:webapp/src/components/navbar/Navbar.jsx
=======
function Navbar () {
>>>>>>> origin/dev:webapp/src/components/Navbar.jsx

function Navbar() {
    return (
        <div className="navbar-container">
            <nav>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a className='nav__link' href="#">Home</a>
                    </li>
                    <li>
                    <a className='nav__link' href="#">Deals</a>
                    </li>
                    <li>
                    <a className='nav__link' href="#">Rooms</a>
                    </li>
                </ul>
                <ul className='nav__list_two'>
                    <li className='nav__item_dropdown'>
                        Languages
                        <img className='DropDown' src={ dropDown } alt="Drop down icon" /> 
                    </li>
                    <li className='nav__item'>
                        My Account
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
