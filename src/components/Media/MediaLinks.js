import React from "react";
import classes from './MediaLink.module.css'
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import gmail from '../../assets/gmail.png'


const MediaLink = () => {

    return (
        <React.Fragment>
            <li>
                <img className={classes.facebook} src={facebook} alt="facebook" ></img>
            </li>
            <li>
                <img className={classes.github} src={github} alt="github" ></img>
            </li>
            <li>
                <img className={classes.instagram} src={instagram} alt="instagram" ></img>
            </li>
            <li>
                <img className={classes.gmail} src={gmail} alt="gmail" ></img>
            </li>
        </React.Fragment>
    )
}

export default MediaLink