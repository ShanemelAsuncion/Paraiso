import React from "react";
import styled from 'styled-components';
import userPic from '../assets/icons/bi_people.png';
import { FontFamily, FontSize } from "./styles";

const StyleRoom = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-items: flex-start;
    position: relative;
    margin: 17px 0 20px 0 ;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        border-bottom: 1px solid black; 
        margin-top: -20px; 
        z-index: 1;
    }
`;


const RoomImage = styled.img`
    width: 317px; 
    height: 211px; 
    padding-right: 50px;
`;

const IconImage = styled.img`
    width: 17px; 
    height: 17px; 
    padding-right: 5px;
`;

const ColDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowDescription = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
`;

const IconDesc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
`;

const RoomTitle = styled.h2`
    margin: 0;
    font-family: ${FontFamily.normal};
    font-size: ${FontSize.md};
    font-weight: 200;
`;

const StyledH4 = styled.h4`
    font-family: ${FontFamily.normal};
    font-size: ${FontSize.xs};
    font-weight: bold;
`;

const StyledP = styled.p`
    font-family: ${FontFamily.normal};
    font-size: ${FontSize.xs};
    font-weight: 200;
`;

const RoomDescription = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    margin-top: -30px; 
`;

const ButtonAndPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PriceAndButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const CustomRadio = styled.input.attrs({ type: 'radio' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 50%;
    position: relative;
    outline: none;
    cursor: pointer;

    &:checked::before {
        content: '';
        width: 10px;
        height: 10px;
        background-color: #000000; 
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export function RoomsContainer({ img, mainTxt, numSleeps, bedType, price, ...extraprops }) {
    return (
        <StyleRoom>
            <RoomImage src={img} alt="Room Image" />
            <ColDescription>
                <RoomTitle>{mainTxt}</RoomTitle>
                <RowDescription>
                    <StyledH4>Max Occupancy</StyledH4>
                    <StyledH4>Bed Type</StyledH4>
                </RowDescription>
                <RowDescription>
                    <RoomDescription>
                        <IconDesc>
                            <IconImage src={userPic} alt='user pic' />
                            <StyledP>{numSleeps}</StyledP>
                        </IconDesc>
                        <StyledP style={{ marginLeft: '10px' }}>{bedType}</StyledP>
                    </RoomDescription>
                </RowDescription>
            </ColDescription>
            <ButtonAndPriceContainer style={{ marginLeft: '210px' }}>
                <PriceAndButtonWrapper style={{ marginTop: '75px' }}>
                    <p>{price}</p>
                    <CustomRadio value={price} />
                </PriceAndButtonWrapper>
            </ButtonAndPriceContainer>
        </StyleRoom>
    );
}
