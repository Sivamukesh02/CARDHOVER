import React,  { useEffect, useState } from 'react';
import AOS from 'aos';
import Home from './Components/Home';
import Carousel3D from './Components/Carousel3D';
import { HashRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App(){
    useEffect(() => {
        // Initializing AOS components animation parameters controls parameters dynamically to prevent layer hides overrides triggers limits setups rules
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Carousel3D" element={<Carousel3D/>}/>
            </Routes>
        </HashRouter>
    );
}
export default App;