import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

type NavProps = {
    scrollNav: boolean;
}

const Nav = styled.nav<NavProps>`
    background: ${({scrollNav}) => scrollNav ? "#000" : "transparent" };
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;

    top: 0;
    z-index: 5;

    @media(max-width: 960px) {
        transition: all .8s ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavLogo = styled(LinkRouter)`
    color: #FFF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

const MobileIcon = styled.div`
    display: none;

    @media(max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #FFF;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;


    @media(max-width: 768px) {
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;
`

const NavLinks = styled(LinkScroll)`
    color: #FFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #01BF71;

    }
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
        display: none;
    }
`

const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background-color: #01BF71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2s ease-in-out;
        background-color: #FFF;
        color: #010606;
    }
`

export { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
}