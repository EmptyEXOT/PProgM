import React from 'react';
import classes from './NavLink.module.css'

const NavLink = ({children, ...props}) => {
    return (
        <a className={classes.navLink} href={props.href}>{children}</a>
    );
};

export default NavLink;