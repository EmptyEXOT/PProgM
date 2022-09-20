import React from 'react';
import axios from "axios";
import classes from './main.module.css'
import Sidebar from "./Sidebar/Sidebar";
const PProg = () => {

    return (
        <div className={classes.pprogContainer}>
            <Sidebar/>
            <div className={classes.pprogWorkspace}>
                <button>Upload config</button>
            </div>
        </div>
    );
};

export default PProg;