import styled from "styled-components";

const InfoContainer = styled.div`
    color: #FFF;
    background: ${({lighBg}) => lighBg ? "#F9F9F9" : "#010606" };

    @media(max-width: 768px) {
        padding: 100px 0;
    }
`

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    /* margin: 0 auto; */
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    justify-content: center;
`

const  InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col1 col2'` : `'col2 col1'` };

    @media(max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ?
        `'col1 col2'` : `'col1 col1' 'col2 col2'`};
    }
`

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

const TopLine = styled.p`
    color: #01BF71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => lightText ? "#F7F8FA" : "#010606"};

    @media(max-width: 480px) {
        font-size: 32px;
    }
`

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => darkText ? "#010606" : "#FFF" };
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`



export {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrapper,
    ImgWrap,
    Img
}