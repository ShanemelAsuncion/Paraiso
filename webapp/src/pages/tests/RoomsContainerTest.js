import React from 'react';
import { RoomsContainer } from '../../components/RoomsContainer';
import roomOne from '../../assets/rooms_pics/pexels-alan-antony-279974862-18470959.png';
import roomTwo from '../../assets/rooms_pics/pexels-alan-antony-279974862-18470980.png';

function RoomsContainerTest () {
    return (
        <div>
            <RoomsContainer img={roomOne} mainTxt={"Junior Room, 2 Double Beds"} numSleeps={"Sleeps 2"} bedType={"2 double beds"} price={"$275.90"}/>
            <RoomsContainer img={roomTwo} mainTxt={"Junior Room, 2 Double Beds"} numSleeps={"Sleeps 2"} bedType={"2 double beds"} price={"$275.90"}/>
        </div>
    );
}

export default RoomsContainerTest;
