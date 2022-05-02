import React from "react";
import classes from './Education.module.css'

const Education = () => {

    return (
        <div className={classes.container}>
            <div className={classes.item1}>
                <h2>Education</h2>
            </div>
            <div className={classes.item2}>
                <p>2016-2019</p>
                <h3>C M S College</h3>
                <p>Bachelor of computer applications</p>
            </div>
            <div className={classes.item3}>
                <p>2014-2016</p>
                <h3>S K M H S S</h3>
                <p>Higher Secondary ( Plus two )</p>
            </div>
            <div className={classes.item4}>
                <p>2013-2014</p>
                <h3>S K M H S S</h3>
                <p>10th</p>
            </div>
        </div>
    )
}

export default Education