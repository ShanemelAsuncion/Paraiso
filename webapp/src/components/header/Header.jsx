import React from 'react';
// import { Navbar } from '../../common';
import logo from "../../assets/Logo.png"

import './Header.css';

function Header () {

    return (
        <section className='header'>
            <section className='header-top'>
                <section className='header-top_logo'>
                    <a href='/' className='header-logo'>
                        <img src={ logo } alt='logo'/>
                    </a>
                </section>
                <section className="header-top_navbar">
                    {/* {<Navbar />} */}
                </section>
            </section>
            <section className='header-bottom'>
                <section className='header-bottom__phone'> 
                    999999999999999999999
                </section>
                <section className='header-nottom__email'>
                    shop.info@gmail.com
                </section>
            </section>
        </section>
    )

}

export default Header;