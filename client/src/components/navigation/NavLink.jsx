import React from 'react';

const NavLink = ({children, ...props}) => {
    return (
        <a href={props.href}>{children}</a>
    );
};

export default NavLink;