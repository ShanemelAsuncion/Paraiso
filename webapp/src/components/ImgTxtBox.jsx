import styled from "styled-components"
import { Spacing, FontSize } from "./styles";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => (props.size == "lg" ? '280px' : '100px')};
    margin: ${(props) => (props.size == "lg" ? Spacing.lg : '0')};
    text-transform: ${(props) => (props.size == "lg" ? 'uppercase' : 'none')};
    font-size: ${(props) => (props.size == "lg" ? FontSize.sm : 'none')};

`;

export function ImgTxtBox({img,label,size,...extraprops}){
    
    return(
        <div>
        <StyledDiv size={size}>
            <img src={img} />
            <div >
                {label}
            </div>
        </StyledDiv>
        </div>
    )
}

