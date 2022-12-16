import { useState } from 'react';

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection"
import InfoSection from '../components/InfoSection';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () : void => setIsOpen(!isOpen);

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection/>
        </>
        
    )
}

export default Home;