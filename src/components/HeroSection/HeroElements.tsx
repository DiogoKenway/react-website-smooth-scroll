import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

const HeroContainer = styled.div`
    background: #0C0C0C;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, .2) 0% ,rgba(0, 0, 0, .6) 100% ),
        linear-gradient(180deg, rgba(0, 0, 0, .2) 0% , transparent 100% );
        z-index: 2;

    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
   width: 100%;
   height: 100%;
   object-fit: cover;
   background: #232A34;
`

const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeroH1 = styled.h1`
    color: #FFF;
    font-size: 48px;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 40px;
    }

    @media(max-width: 480px) {
        font-size: 32px;
    }
`

const HeroP = styled.p`
    margin-top: 24px;
    color: #FFF;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media(max-width: 768px) {
        font-size: 24px;
    }

    @media(max-width: 480px) {
        font-size: 18px;
    }

`

const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;

`


export {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
}