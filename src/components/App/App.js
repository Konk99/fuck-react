import React from "react";
import {Routes, Route} from 'react-router-dom';
import Contact from "../Contact/Contact";
import HUD from "../HUD/HUD";
import Project from "../Project/Project";
import About from "../About/About";
import Main from "../Main/Main";

const App = () => (
        <HUD>
            <Routes>
                <Route exact="true" path = '/' component = {Main} />
                <Route exact="true" path = '/contact' component = {Contact} />
                <Route exact="true" path = '/project' component = {Project} />
                <Route exact="true" path = '/about' component = {About} />
            </Routes>
        </HUD>
);

export default App;