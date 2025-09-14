import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

import { homeObjThree } from "../components/InfoSection/Data";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        localStorage.clear()
    }, [])
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Navbar toggle={toggle} />

            <HeroSection />

            <InfoSection {...homeObjThree} />
            

        </>
    );
};
export default Home;