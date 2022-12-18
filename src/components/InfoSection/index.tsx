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

const InfoSection = () => {
    
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrapper>
                                <Button 
                                    primary={true}
                                    dark={true}
                                    fontbig={true}
                                    big={true}
                                to="home" >Color</Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;