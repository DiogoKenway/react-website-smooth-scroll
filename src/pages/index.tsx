import { useState } from 'react';

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () : void => setIsOpen(!isOpen);

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
        
    )
}

export default Home;