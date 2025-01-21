import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/team'} element={<OurTeam/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;