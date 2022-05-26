import React from "react";
import classes from './MediaLink.module.css'
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'


const MediaLink = () => {

    return (
        <React.Fragment>
                        <li className={classes.list}>
                <img onClick={()=> window.open("https://www.linkedin.com/in/naveenvb560")} className={classes.instagram} src={linkedin} alt="linkedin" ></img>
            </li>
            <li className={classes.list}>
                <img onClick={()=> window.open("https://www.facebook.com/naveen.vb.73/")}  className={classes.facebook} src={facebook} alt="facebook" ></img>
            </li>
            <li className={classes.list}>
                <img onClick={()=> window.open("https://github.com/naveenvb560")} className={classes.github} src={github} alt="github" ></img>
            </li>      
            <li className={classes.list}>
                <img onClick={()=> window.open("https://naveenvb560@gmail.com")} className={classes.gmail} src={gmail} alt="gmail" ></img>
            </li>
        </React.Fragment>
    )
}

export default MediaLink