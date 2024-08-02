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
import Button from '../../components/Button';
import petIcon from '../../assets/icons/pet.png'
import foodIcon from '../../assets/icons/food.png'
import gymIcon from '../../assets/icons/guidance_gym.png'
import planeIcon from '../../assets/icons/guidance_plane.png'
import starsIcon from '../../assets/review_stars.png'

function Rooms() {
    return (
        <div className='rooms-page'>
            <div className="header-container">
                <img src={logo} alt="Logo" className="logo" />
                <Navbar />
            </div>
            <h1>Choose Your Room</h1>
            <div className="rooms-container">
                <div className="room">
                    <div className='image-col'>
                        <img src={roomOne} alt="Room Image" className="roomImg" />
                    </div>
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
                        <Button>Book</Button>
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
                        <Button>Book</Button>
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
                        <Button>Book </Button>
                    </div>
                </div>
            </div>
            <h1>Additional Amenities</h1>
            <div className="amenities-row">
                <div className="amenities-column">
                    <ul>
                        <li><img src={petIcon} alt="Pet Icon"/> PET FRIENDLY</li>
                        <li><img src={planeIcon} alt="Plane Icon"/> COMPLIMENTARY AIRPORT TRANSFERS</li>
                    </ul>
                </div>
                <div className="amenities-column">
                    <ul>
                        <li><img src={foodIcon} alt="Food Icon"/> WORLD-CLASS DINING</li>
                        <li><img src={gymIcon} alt="Gym Icon"/> 24-HOUR FITNESS ROOM</li>
                    </ul>
                </div>
            </div>
            <h1>Latest Reviews</h1>
            <div className='review-section'>
                <div className='review-col-sec'>
                    <ul>
                        <li>
                            <div className="review-content">
                                <img src={starsIcon} alt='Stars Icon' className='starsImg'/>
                                <p>
                                    “Maecenas eu erat nibh. In rhoncus eget lectus in tempor. Vivamus et risus quis est interdum lobortis ac et lectus. Mauris nec libero sem. Nulla fermentum auctor ipsum, cursus ultricies turpis sagittis vitae. Nam pellentesque eros sit amet diam mattis, various ultrices arcu volutpat. Suspendisse sit amet turpis ac arcu egestas aliquam.”
                                    - Roger K. Wallace
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="review-content">
                                <img src={starsIcon} alt='Stars Icon' className='starsImg'/>
                                <p>
                                    “Maecenas eu erat nibh. In rhoncus eget lectus in tempor. Vivamus et risus quis est interdum lobortis ac et lectus. Mauris nec libero sem. Nulla fermentum auctor ipsum, cursus ultricies turpis sagittis vitae. Nam pellentesque eros sit amet diam mattis, various ultrices arcu volutpat. Suspendisse sit amet turpis ac arcu egestas aliquam.”
                                    - Roger K. Wallace
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='review-col-sec'>
                    <ul>
                        <li>
                            <div className="review-content">
                                <img src={starsIcon} alt='Stars Icon' className='starsImg'/>
                                <p>
                                    “Maecenas eu erat nibh. In rhoncus eget lectus in tempor. Vivamus et risus quis est interdum lobortis ac et lectus. Mauris nec libero sem. Nulla fermentum auctor ipsum, cursus ultricies turpis sagittis vitae. Nam pellentesque eros sit amet diam mattis, various ultrices arcu volutpat. Suspendisse sit amet turpis ac arcu egestas aliquam.”
                                    - Roger K. Wallace
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="review-content">
                                <img src={starsIcon} alt='Stars Icon' className='starsImg'/>
                                <p>
                                    “Maecenas eu erat nibh. In rhoncus eget lectus in tempor. Vivamus et risus quis est interdum lobortis ac et lectus. Mauris nec libero sem. Nulla fermentum auctor ipsum, cursus ultricies turpis sagittis vitae. Nam pellentesque eros sit amet diam mattis, various ultrices arcu volutpat. Suspendisse sit amet turpis ac arcu egestas aliquam.”
                                    - Roger K. Wallace
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Rooms;
