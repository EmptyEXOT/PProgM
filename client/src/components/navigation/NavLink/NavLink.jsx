import React from 'react';
import classes from './NavLink.module.css'
import {Link} from "react-router-dom";

const NavLink = ({children, ...props}) => {
    return (
        <Link to={props.destination} className={classes.navLink}>{children}</Link>
    );
};

export default NavLink;