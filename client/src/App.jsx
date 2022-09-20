import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from "./components/navigation/NavBar/NavBar";
import classes from './globals/main.module.css'
import Logo from "./components/navigation/Logo/Logo";
import Pages from "./components/navigation/Pages/Pages";
import NavLink from "./components/navigation/NavLink/NavLink";
import Sidebar from "./pages/PProg/Sidebar/Sidebar";

const App = () => {
    return (
        <div className={classes.main}>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default App;