import React from 'react';
import NavLink from "../NavLink/NavLink";
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={classes.navBar}>
            <div>logo</div>
            <div>
                <NavLink href={'/'}>Main</NavLink>
                <NavLink href={'/users'}>Users</NavLink>
            </div>

        </div>
    );
};

export default NavBar;