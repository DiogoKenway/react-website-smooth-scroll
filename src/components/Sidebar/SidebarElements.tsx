import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 6;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
    opacity: ${isOpen => isOpen ? "100%": "0"};
    top: ${isOpen => isOpen ? "0" : "-100%"};
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const CloseIcon = styled(FaTimes)`
    color: #FFF;
`

const SidebarWrapper = styled.div`
    color: #FFF;
`

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;


    @media(max-width: 480px) {

    }
`

const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all .2s ease-in-out;
    color: #FFF;

    &:hover {
        color: #01BF71;
        transition: all .2s ease-in-out;
    }
`

const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01BF71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2s ease-in-out;
        background: #FFF;
        color: #010606;
    }
`


export {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
}