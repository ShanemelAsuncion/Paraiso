import React from 'react';
import "../navbar/Navbar.css";
import dropDown from '../../assets/black_dropdown.png'


function Navbar() {
    return (
        <div>
            <div className="navbar-container">
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
                <ul className='nav__list'>
                    <li className='nav__item_dropdown'>
                        Languages
                        {/* <img className='DropDown' src={ dropDown } alt="Drop down icon" />  */}
                    </li>
                    <li className='nav__item'>
                        My Account
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
