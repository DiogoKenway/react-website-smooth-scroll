import { useState } from "react";
import Video from "../../assets/videos/video.mp4";
import Button from "../ButtonElement";

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => setHover(!hover);

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in
                    credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    primary={"active"}
                    dark={"active"}
                    fontbig={"active"}
                    big={"active"}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    >
                        Get started { hover ? 
                        <ArrowForward/> :
                        <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;