import React from "react";
import classes from './About.module.css'
import photo from '../../assets/profile.jpg'
import myData from '../../assets/Data.json';

const About = () => {
    const AboutTitle = myData.About.title
    const AboutDescription = myData.About.description 
    return (
        <div className={classes.container}>
            <div className={classes.item1}>
                <img className={classes.img} src={photo} alt="profile_pic"></img>
            </div>
            <div className={classes.item2}>
                <h2>Hello I'm <span style={{color: "#BB2222"}}>Naveen.</span><span style={{display: "inline-block"}}>I'm a Software Engineer</span></h2>
            </div>
            <div className={classes.item3}>
                <p>{AboutDescription}</p>
            </div>
        </div>
    )

}


export default About