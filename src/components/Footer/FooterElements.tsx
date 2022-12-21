import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
    background-color: #101522;
`
const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media(max-width: 820px) {
        padding-top: 32px;
    }
`


const FooterLinksWrapper = styled.div`
    display: flex;

    @media(max-width: 820px) {
        flex-direction: column;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    color: #FFF;

    @media(max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    color: #FFF;
    text-decoration: none;
    margin-bottom: .5rem;
    font-size: 14px;

    &:hover {
        color: #01BF71;
        transition: all .3s ease-out;
    }
`

export {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink
};