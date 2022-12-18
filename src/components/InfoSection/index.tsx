import Button from "../ButtonElement";

import {
    InfoContainer,
    InfoWrapper,
    Column1,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrapper,
    Column2,
    ImgWrap,
    Img

} from "./InfoElements";

type homeObjProps = {
    id: string;
    lightBg: boolean;
    lightText: boolean;
    lightTextDesc: boolean;
    topLine: string;
    headLine: string;
    description: string;
    buttonLabel: string;
    imgStart: boolean;
    img: string;
    alt: string;
    dark: boolean;
    primary: boolean;
    darkText: boolean;
}

const InfoSection = ({ 
    id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
    darkText }: homeObjProps) => {


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrapper>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-80}
                                        primary={"active"}
                                        dark={"active"}
                                        fontbig={"active"}
                                        big={"active"}
                                        >{buttonLabel}</Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;