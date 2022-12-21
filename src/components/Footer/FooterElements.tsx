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

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media(max-width: 820px){
        flex-direction: column;
    }
`

const SocialLogo = styled(Link)`
    color: #FFF;
    justify-content: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

const WebsiteRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const SocialIconLink = styled.a`
    color: #FFF;
    font-size: 24px;
`


export {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
};