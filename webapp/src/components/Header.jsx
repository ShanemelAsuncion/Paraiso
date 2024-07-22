import React from 'react';
// import { Navbar } from '../../common';
import logo from "../assets/Logo.png";


function Header () {

    return (
        <section className='header' style={styles.container}>
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


const styles = {
    container: {
        height: "100%",
        margin: "0 auto",
    },
}

export default Header;