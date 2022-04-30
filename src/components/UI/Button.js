import React from "react";
import classes from './Button.module.css'
const Button = (props) => {

    return (
        <a onClick={props.onClick} className={classes.rotatebutton}>
            <span className={classes.rotatebuttonface}>{props.children}</span>
            <span className={classes.rotatebuttonfaceback}>{props.children}</span>
        </a>
    )
}

export default Button