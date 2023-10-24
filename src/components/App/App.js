import React from "react";
import {Routes, Route} from 'react-router-dom';
import Contact from "../Contact/Contact";
import HUD from "../HUD/HUD";
import Project from "../Project/Project";
import About from "../About/About";
import Main from "../Main/Main";

const App = () => {
    return (
        <HUD>
            <Routes>
                <Route exact="true" path = 'fuck-react/main' element = {Main} />
                <Route exact="true" path = 'fuck-react/contact' element = {Contact} />
                <Route exact="true" path = 'fuck-react/project' element = {Project} />
                <Route exact="true" path = 'fuck-react/about' element = {About} />
            </Routes>
        </HUD>
);
}

export default App;