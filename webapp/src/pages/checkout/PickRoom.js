import React from 'react';
import logo from '../../assets/Logo_black.png';
import roomOne from '../../assets/rooms_pics/pexels-alan-antony-279974862-18470959.png';
import roomTwo from '../../assets/rooms_pics/pexels-alan-antony-279974862-18470980.png';
import roomThree from '../../assets/rooms_pics/pexels-upgraded-points-121011768-14513797 1.png';
import userPic from '../../assets/icons/bi_people.png';
import bedIcon from '../../assets/icons/material-symbols-light_bed-outline.png';

function PickRoom () {
  return (
    <div>
        <div className="navbar-container">
            <img src={logo} alt="Logo" className="logo" />
            <p>MY ACCOUNT</p>
        </div>  
        <div className='intro-container'>
            <h2>Step 1: Select Your Stay</h2>
            <p>Jan 12, 2025- jan 14, 2025</p>
            <p>2 Adults</p>
            <p>Checkout</p>
        </div>
        <div className='rooms-container'>
            <div className='rooms'>
                <img src={roomOne} alt= 'Room one'></img>
                <h3>Junior Room, 2 Double Beds</h3>
                <div className='max-container'>
                    <h4>Max Occupancy</h4>
                    <img src={userPic} alt="User Icon"/>
                    <p>Sleeps 2</p>
                </div>
                <div className='bed-container'>
                    <h4>Bed Type</h4>
                    <img src={bedIcon} alt="Bed"/> 
                    <p>2 Double Beds</p>
                </div>
                <p>$275.90</p>
            </div>
            <div className='rooms'>
                <img src={roomTwo} alt= 'Room two'></img>
                <h3>Premium Room</h3>
                <div className='max-container'>
                    <h4>Max Occupancy</h4>
                    <img src={userPic} alt="User Icon"/>
                    <p>Sleeps 2</p>
                </div>
                <div className='bed-container'>
                    <h4>Bed Type</h4>
                    <img src={bedIcon} alt="Bed"/> 
                    <p>1 King Bed</p>
                </div>
                <p>$320.50</p>
            </div>
            <div className='rooms'>
                <img src={roomThree} alt= 'Room three'></img>
                <h3>Queen Room</h3>
                <div className='max-container'>
                    <h4>Max Occupancy</h4>
                    <img src={userPic} alt="User Icon"/>
                    <p>Sleeps 2</p>
                </div>
                <div className='bed-container'>
                    <h4>Bed Type</h4>
                    <img src={bedIcon} alt="Bed"/> 
                    <p>2 Queen Beds</p>
                </div>
                <p>$450.20</p>
            </div>
        </div>
    </div>
  )
}

export default PickRoom