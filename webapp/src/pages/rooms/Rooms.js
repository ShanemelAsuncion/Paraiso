import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../assets/Logo_black.png';
import './Rooms.css';
import roomOne from '../../assets/rooms_pics/pexels-alan-antony-279974862-18470959.png';
import roomTwo from '../../assets/rooms_pics/pexels-alan-antony-279974862-18470980.png';
import roomThree from '../../assets/rooms_pics/pexels-upgraded-points-121011768-14513797 1.png';
import userPic from '../../assets/icons/bi_people.png';
import coffeeIcon from '../../assets/icons/coffee.png';
import sizeIcon from '../../assets/icons/geo_turf-size.png';
import infinityIcon from '../../assets/icons/infinite.png';
import bedIcon from '../../assets/icons/material-symbols-light_bed-outline.png';
import carIcon from '../../assets/icons/ph_car-light.png';
import wifiIcon from '../../assets/icons/wifi.png';
import Button from '../../components/styles';

function Rooms() {
    return (
        <div>
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="logo" />
                <Navbar />
            </div>
            <h1>Choose Your Room</h1>
            <div className="rooms-container">
                <div className="room">
                    <img src={roomOne} alt="Room Image" className="roomImg" />
                    <div className="roomDescription">
                        <h2>Junior Room, 2 Double Beds</h2>
                        <ul>
                            <li><img src={infinityIcon} alt="Infinity Pool" /> All-inclusive (food/beverages/snacks)</li>
                            <li><img src={wifiIcon} alt="WiFi" /> Free WiFi</li>
                            <li><img src={coffeeIcon} alt="Coffee" /> Free breakfast</li>
                            <li><img src={carIcon} alt="Car" /> Free self parking</li>
                            <li><img src={userPic} alt="User" className="userIcon"/> Sleeps 2</li>
                            <li><img src={sizeIcon} alt="Room Size" /> 36 sq m</li>
                            <li><img src={bedIcon} alt="Bed" /> 2 Double Beds</li>
                        </ul>
                        <Button>Book Now</Button>
                    </div>
                </div>
                <div className="room">
                    <img src={roomTwo} alt="Room Image" className="roomImg" />
                    <div className="roomDescription">
                        <h2>Premium Room</h2>
                        <ul>
                            <li><img src={infinityIcon} alt="Infinity Pool" /> All-inclusive (food/beverages/snacks)</li>
                            <li><img src={wifiIcon} alt="WiFi" /> Free WiFi</li>
                            <li><img src={coffeeIcon} alt="Coffee" /> Free breakfast</li>
                            <li><img src={carIcon} alt="Car" /> Free self parking</li>
                            <li><img src={userPic} alt="User" className="userIcon"/> Sleeps 2</li>
                            <li><img src={sizeIcon} alt="Room Size" /> 36 sq m</li>
                            <li><img src={bedIcon} alt="Bed" /> 2 Double Beds</li>
                        </ul>
                        <Button>Book Now</Button>
                    </div>
                </div>
                <div className="room">
                    <img src={roomThree} alt="Room Image" className="roomImg" />
                    <div className="roomDescription">
                        <h2>Queen Room</h2>
                        <ul>
                            <li><img src={infinityIcon} alt="Infinity Pool" /> All-inclusive (food/beverages/snacks)</li>
                            <li><img src={wifiIcon} alt="WiFi" /> Free WiFi</li>
                            <li><img src={coffeeIcon} alt="Coffee" /> Free breakfast</li>
                            <li><img src={carIcon} alt="Car" /> Free self parking</li>
                            <li><img src={userPic} alt="User" className="userIcon"/> Sleeps 2</li>
                            <li><img src={sizeIcon} alt="Room Size" /> 36 sq m</li>
                            <li><img src={bedIcon} alt="Bed" /> 2 Double Beds</li>
                        </ul>
                        <Button>Book Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;
