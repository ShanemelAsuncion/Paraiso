import React from "react";
import { Colors } from "./styles";
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${(props) => (props.type == 'outline' ?'transparent' : props.color)};
    font-size: 20px;
    color: ${(props) => (props.color == Colors.darkGreen & props.type == 'filled' ? 'white' : 'black')};
    border: solid 3px;
    border-color:  ${(props) => (props.color == 'neutral' ? Colors.neutral: Colors.darkGreen)};
    padding:20px;
    width: 200px;
    font-family:Cormorant;
    font-weight:700;
    margin: 20px;    
    border-radius: ${(props) => (props.type == 'filled' ? '30px': '15px')};     
`;

export function ThemedButton({color,type,label,...extraprops}){
    if (color == "green"){
        color= Colors.darkGreen;
    }
    return(
        <div>
        <StyledButton color={color} type={type}> {label} </StyledButton>
        </div>
    )
}

