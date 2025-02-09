import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import OurProject from "./pages/OurProject";


function App(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/team'} element={<OurTeam/>}/>
                    <Route path={'/project'} element={<OurProject/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;