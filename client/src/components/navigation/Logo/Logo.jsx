import React from 'react';
import classes from './logo.module.css'

const Logo = (props) => {
    return (
        <div className={classes.logo}>
            {props.src}
        </div>
    );
};

export default Logo;