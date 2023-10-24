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
                <Route exact="true" path = 'fuck-react/main' component = {Main} />
                <Route exact="true" path = 'fuck-react/contact' component = {Contact} />
                <Route exact="true" path = 'fuck-react/project' component = {Project} />
                <Route exact="true" path = 'fuck-react/about' component = {About} />
            </Routes>
        </HUD>
);

export default App;