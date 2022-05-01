import React from "react";
import MediaLink from '../SubPages/MediaLinks'
import classes from './Footer.module.css'

const Footer =()=> {

    return  (
        <div className={classes.footer}>
       <p className={classes.copyright} >@2022 | created & designed by Naveen V B</p>
       <div className={classes.medialinkcontainer}> 
            <MediaLink></MediaLink>
            </div>
        </div>
    )
}

export default Footer