import React from "react";
import { Colors } from "./styles";
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${(props) => 
        props.type === 'outline' || props.type === 'underline' ? 'transparent' : props.color
    };
    font-size: ${(props) => 
        props.type === 'underline' ? '15px' : '20px'
    };
    color: ${(props) => {
        if (props.color === 'black' && props.type === 'filled') {
            return 'white'; 
        } else if (props.color === 'neutral' && props.type === 'outline') {
            return Colors.black; 
        } else {
            return 'black'; 
        }
    }};
    border: ${(props) => (props.type === 'underline' ? '0px' : "solid 1px black")};
    border-color: ${(props) => (props.color === 'neutral' ? Colors.neutral : Colors.darkGreen)};
    text-decoration: ${(props) => 
        props.type === 'underline' ? 'underline' : 'none'
    };
    text-underline-offset: ${(props) => 
        props.type === 'underline' ? '20px' : '0'
    };
    width: ${(props) => props.width || '290px'}; 
    height: ${(props) => props.height || '58px'}; 
    font-family: Cormorant;
    font-weight: 700;
    margin: 20px;
    border-radius: 30px;
`;

export function ThemedButton({ color, type, label, width, height, ...extraprops }) {
    return (
        <StyledButton color={color} type={type} width={width} height={height} {...extraprops}> 
            {label} 
        </StyledButton>
    );
}
