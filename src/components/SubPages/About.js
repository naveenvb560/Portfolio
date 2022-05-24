import React from "react";
import classes from './About.module.css'
import photo from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'
import Button from "../UI/Button";
import myData from '../../assets/Data.json';
import { useNavigate } from "react-router-dom";
const About = () => {

    const navigate = useNavigate()
    const viewProjectHandler = () => {

        navigate('Projects')
    }

    const AboutDescription = myData.About.description
    return (
        <div className={classes.container}>

            <div className={classes.imagecontainer}>
                <div>
                    <img className={classes.img} src={photo} alt="profile_pic"></img>
                </div>
            </div>
            <div className={classes.detailcontainer}>
                <div className={classes.headingcontainer}>
                    <h2>Hello I'm <span style={{ color: "var(--addon-color)" }}>Naveen V B.</span><span style={{ display: "inline-block" }}>I'm a Software Engineer.</span></h2>
                </div>
                <div>
                    <p>{AboutDescription}</p>
                </div>
                <div className={classes.buttoncontainer}>
                    <Button onClick={viewProjectHandler} >View Projects</Button>
                    <a className={classes.downloadbutton} href={Resume} download>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About