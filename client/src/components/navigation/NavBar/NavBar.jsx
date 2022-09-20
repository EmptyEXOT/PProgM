import React from 'react';
import NavLink from "../NavLink/NavLink";
import classes from './NavBar.module.css'
import Logo from '../Logo/Logo'
import Pages from "../Pages/Pages";
import Settings from "../SettingsContainer/Settings/Settings";
import SettingsContainer from "../SettingsContainer/SettingsContainer";

const NavBar = () => {
    return (
        <>
            <Logo src='Logo'/>
            <Pages>
                <NavLink destination='home'>Home</NavLink>
                <NavLink destination='pprog'>PProg</NavLink>
            </Pages>
            <SettingsContainer>
                <Settings/>
            </SettingsContainer>
        </>
    )
};

export default NavBar;