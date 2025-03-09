import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import OurProject from "./pages/OurProject";
import Apply from "./components/Apply";
import IfWorker from "./components/IfWorker";
import IfStudent from "./components/IfStudent";
import IfOther from "./components/IfOther";

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/team'} element={<OurTeam/>}/>
                    <Route path={'/project'} element={<OurProject/>}/>
                    <Route path={'/apply'} element={<Apply/>}/>
                    <Route path={'/worker'} element={<IfWorker/>}/>
                    <Route path={'/student'} element={<IfStudent/>}/>
                    <Route path={'/other'} element={<IfOther/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;