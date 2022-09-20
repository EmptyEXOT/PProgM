import React from 'react';
import NavLink from "../NavLink/NavLink";
import classes from './pages.module.css'
const Pages = (props) => {
    return (
        <nav className={classes.pages}>
            {props.children}
        </nav>
    );
};

export default Pages;