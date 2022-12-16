import { useState } from 'react';

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () : void => setIsOpen(!isOpen);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
        </>
        
    )
}

export default Home;