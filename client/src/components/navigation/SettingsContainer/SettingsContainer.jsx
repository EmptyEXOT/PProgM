import React from 'react';
import classes from './SettingsContainer.module.css'
import Settings from "./Settings/Settings";

const SettingsContainer = (props) => {
    return (
        <div className={classes.settings_container}>
            {props.children}
        </div>
    );
};

export default SettingsContainer;