import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../assets/Logo_black.png';
import dealOne from '../../assets/deals_pics/#1.png'
import dealTwo from '../../assets/deals_pics/#2.png' 

function Deals () {
    return (
        <div>
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="logo" />
                <Navbar />
            </div>
            <div className="deals-container">
                <h1>Offers and Packages</h1>
                <div className="deals">
                    <img src={dealOne} alt="Deal one Image" className="DealImg" />
                    <h3>Escape Package</h3>
                    <p>
                        Pellentesque et diam leo. Cras facilisis justo sed orci laoreet efficitur. Duis nulla odio, 
                        tempor non metus quis, ultrices interdum velit. Pellentesque orci nisi, tincidunt at nisi sit amet, 
                        dignissim accumsan tortor. Etiam ullamcorper viverra lectus ac imperdiet. Integer viverra ac purus ut ornare. 
                    </p>
                    <button>BOOK NOW</button>
                    
                </div>
                <div className="deals">
                    <img src={dealTwo} alt="Deal one Image" className="DealImg" />
                    <h3>Spa Credit Package</h3>
                    <p>
                        Quisque nunc ante, consectetur sed sapien vitae, bibendum mollis lacus. Duis vel arcu vel lectus pretium ultrices. 
                        Nullam aliquam, risus quis maximus auctor, elit dui vestibulum enim, at porta justo lacus sed sem.
                    </p>
                    <button>BOOK NOW</button>
                </div>
            </div>
        </div>

    );
}

export default Deals;