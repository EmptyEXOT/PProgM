import React from 'react';
import classes from './pprogOptions.module.css'

const PProgOption = (props) => {
    return (
        <button className={classes.pprogOptions}>
            <div className={classes.optionsLogo}>{props.src}</div>
            <h6>{props.name}</h6>
        </button>
    );
};

export default PProgOption;