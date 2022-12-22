import styled from "styled-components";
import { Link } from "react-scroll";

type ButtonProps = {
    primary: boolean;
    dark: boolean;
    big?: boolean;
    fontbig?: boolean; 
}

const Button = styled(Link)<ButtonProps>`
    border-radius: 50px;
    background: ${({primary}) => primary ? "#01BF71" : "#010606" };
    white-space: nowrap;
    padding: ${({big}) => big ? "14px 48px" : "12px 30px" };
    color: ${({dark}) => dark ? "#010606" : "#FFF" };
    font-size: ${({fontbig}) => fontbig ? "20px" : "16px" };
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover {
        transition: all .2s ease-in-out;
        background: ${({primary}) => primary ? "#FFF" : "#01BF71" };
        
    }
`

export default Button;