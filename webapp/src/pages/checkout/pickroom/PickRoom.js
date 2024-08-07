import React, { useState } from 'react';
import './PickRoom.css';
import Navbar from '../../../components/navbar/Navbar';
import logo from '../../../assets/Logo_black.png';
import roomOne from '../../../assets/rooms_pics/pexels-alan-antony-279974862-18470959.png';
import roomTwo from '../../../assets/rooms_pics/pexels-alan-antony-279974862-18470980.png';
import roomThree from '../../../assets/rooms_pics/pexels-upgraded-points-121011768-14513797 1.png';
import { RoomsContainer } from '../../../components/RoomsContainer';
import { ThemedButton } from '../../../components/ThemedButton';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css'; // Import the theme

function PickRoom() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const handleSelect = (item) => {
    setState([item.selection]);
    setShowCalendar(false); // Hide calendar after selection
  };

  const formatDate = (date) => {
    if (!date) return 'Select Dates';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const startDate = formatDate(state[0]?.startDate);
  const endDate = formatDate(state[0]?.endDate);
  const dateText = startDate && endDate ? `${startDate} - ${endDate}` : 'Select Dates';

  return (
    <div className='pickroom-container'>
      <div className="header-container">
        <img src={logo} alt="Logo" className="logo" />
        <Navbar />
      </div>
      <div className='rooms-container'>
        <h2>Step 1: Select Your Stay</h2>
        <div className='intro-container'>
          <button className="select-dates-button" onClick={toggleCalendar}>
            {dateText}
          </button>
          <div className="date-picker-container">
            {showCalendar && (
              <div className="date-range-calendar">
                <DateRange
                  editableDateInputs={true}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  minDate={new Date()} // Restrict to current and future dates
                />
              </div>
            )}
          </div>
          <p>2 Adults</p>
          <ThemedButton color='black' type="filled" label="Checkout" width="235px" height="56px"/> 
        </div>
        <div className='rooms'>
          <RoomsContainer img={roomOne} mainTxt={"Junior Room, 2 Double Beds"} numSleeps={"Sleeps 2"} bedType={"2 double beds"} price={"$275.90"} /> 
          <RoomsContainer img={roomTwo} mainTxt={"Junior Room, 2 Double Beds"} numSleeps={"Sleeps 2"} bedType={"2 double beds"} price={"$275.90"}/> 
          <RoomsContainer img={roomThree} mainTxt={"Junior Room, 2 Double Beds"} numSleeps={"Sleeps 2"} bedType={"2 double beds"} price={"$275.90"}/> 
        </div>
      </div>
    </div>
  );
}

export default PickRoom;
 