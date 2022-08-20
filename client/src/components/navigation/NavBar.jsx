import React from 'react';
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <div>
            <NavLink href={'/'}>Main</NavLink>
            <NavLink href={'/users'}>Users</NavLink>
        </div>
    );
};

export default NavBar;