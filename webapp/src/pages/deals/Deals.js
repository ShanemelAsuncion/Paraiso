import React from 'react';
import './Deals.css'
import Navbar from '../../components/navbar/Navbar';
import logo from '../../assets/Logo_black.png';
import dealOne from '../../assets/deals_pics/dealOne.png'
import dealTwo from '../../assets/deals_pics/dealTwo.png' 
import Button from '../../components/DealsButton'


function Deals () {
    return (
        <div className='dealsmain-container'>
            <div className='header-container'>
                <img src={logo} alt="Logo" className="logo" />
                <Navbar />
            </div>
            <div className="deals-container">
                <h1>Offers and Packages</h1>
                <div className="deals">
                    <div className='deals-item'>
                        <img src={dealOne} alt="Deal one Image" className="DealImg" />
                        <h3>Escape Package</h3>
                        <p>
                            Pellentesque et diam leo. Cras facilisis justo sed orci laoreet efficitur. Duis nulla odio, 
                            tempor non metus quis, ultrices interdum velit. Pellentesque orci nisi, tincidunt at nisi sit amet, 
                            dignissim accumsan tortor. Etiam ullamcorper viverra lectus ac imperdiet. Integer viverra ac purus ut ornare. 
                        </p>
                        <button className="deal-button">BOOK NOW</button>

                    </div>
                    <div className='deals-item'>
                        <img src={dealTwo} alt="Deal one Image" className="DealImg" />
                        <h3>Spa Credit Package</h3>
                        <p>
                            Quisque nunc ante, consectetur sed sapien vitae, bibendum mollis lacus. Duis vel arcu vel lectus pretium ultrices. 
                            Nullam aliquam, risus quis maximus auctor, elit dui vestibulum enim, at porta justo lacus sed sem.
                        </p>
                        <button className="deal-button">BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Deals;