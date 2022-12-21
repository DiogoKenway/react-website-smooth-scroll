import { useState } from 'react';

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection"
import InfoSection from '../components/InfoSection';
import Services from '../components/services';

import { 
    homeObjOne,
    homeObjTwo,
    homeObjThree,
} from '../components/InfoSection/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () : void => setIsOpen(!isOpen);

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
        </>
        
    )
}

export default Home;