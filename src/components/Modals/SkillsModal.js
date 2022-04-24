import React from "react";
import classes from './SkillsModal.module.css'

const SkillsModal = (props) => {

    return (
    <div className={classes.container}>
        <div className={classes.uiwidgets}>
            <div className={classes.uivalues}>{props.percentage}</div>
        </div>
        <div className={classes.uilabels}>{props.name}</div>
    </div>
    )
}

export default SkillsModal