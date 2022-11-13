import React from 'react';
import { useContext } from "react";

import "./App.scss"
import {DarkModeContext} from "./appComponents/context/darkModeContext";
import Home from "./appComponents/home/Home";

const App = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "app dark" : "app"}>
            <div>
                <Home />
            </div>
        </div>
    )

}

export default App; 