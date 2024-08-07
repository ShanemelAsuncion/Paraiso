import React, { useState, useRef, useEffect } from 'react';
import "../navbar/Navbar.css";
import dropDown from '../../assets/black_dropdown.png';
import franFlag from '../../assets/flags/fxemoji_franceflag.png';
import spanFlag from '../../assets/flags/fxemoji_spanishflag.png';
import usFlag from '../../assets/flags/twemoji_flag-us-outlying-islands.png';

function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropDown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]); 

    return (
        <div>
            <div className="navbar-container">
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a className='nav__link' href="/">Home</a>
                    </li>
                    <li>
                        <a className='nav__link' href="/deals">Deals</a>
                    </li>
                    <li>
                        <a className='nav__link' href="/rooms">Rooms</a>
                    </li>
                </ul>
                <ul className='nav__list'>
                    <li className='nav__item_dropdown' ref={dropdownRef} onClick={toggleDropDown}>
                        Languages
                        <img className='DropDown' src={dropDown} alt="Drop down icon"/> 
                        {isDropdownVisible && <DropdownItem />}
                    </li>
                    <li className='nav__item'>
                        My Account
                    </li>
                </ul>
            </div>
        </div>
    );
}

function DropdownItem(props) {
    return(
        <ul className='dropdown-items'>
            <li> <img src='usFlag'/>English</li>
            <li> <img src='franFlag'/>French</li>
            <li> <img src='spanFlag'/>Spanish</li>
        </ul>
    )
}

export default Navbar;
