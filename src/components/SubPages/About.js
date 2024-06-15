import React from "react";
import classes from './About.module.css'
import photo from '../../assets/profile.jpg'
import Button from "../UI/Button";
import myData from '../../assets/Data.json';
import { useNavigate } from "react-router-dom";
let isDarkTheme= true
const About = () => {
    const navigate = useNavigate()
    const viewProjectHandler = () => {

        navigate('Projects')
    }

    const changeTheme =()=> {
        if(isDarkTheme) {
            document.documentElement.style.setProperty('--primary-color',"#e1dfdd");
            document.documentElement.style.setProperty('--secondary-color',"#000000");
            document.documentElement.style.setProperty('--tertiary-color',"#1b1b1b");
            document.documentElement.style.setProperty('--addon-color',"#ff5100");
            document.documentElement.style.setProperty('--gradient',"#6b676741");
            isDarkTheme = false }

            else {
                document.documentElement.style.setProperty('--primary-color',"#000401");
                document.documentElement.style.setProperty('--secondary-color',"#b3d4d4");
                document.documentElement.style.setProperty('--tertiary-color',"#8D9797");
                document.documentElement.style.setProperty('--addon-color',"#916f08");
                document.documentElement.style.setProperty('--gradient',"linear-gradient(to left, #916f081a, #1e1e1eb3)");
                isDarkTheme = true
            }
    }

    const AboutDescription = myData.About.description
    return (
        <div className={classes.container}>

            <div className={classes.imagecontainer}>
                <div>
                    <img onClick={changeTheme} className={classes.img} src={photo} alt="profile_pic"></img>
                </div>
            </div>
            <div className={classes.detailcontainer}>
                <div className={classes.headingcontainer}>
                    <h2>Hello I'm <span style={{ color: "var(--addon-color)" }}>Naveen V B. </span><span style={{ display: "inline-block" }}> I'm a Software Engineer.</span></h2>
                </div>
                <div>
                    <p className={classes.descriptionitem}>{AboutDescription}</p>
                </div>
                <div className={classes.buttoncontainer}>
                    <Button onClick={viewProjectHandler} >View Projects</Button>
                    <a className={classes.downloadbutton} href="https://drive.google.com/file/d/1TAH3VQv_O1anNuN8FI4D_G9Q8dzavyYL/view?usp=drive_link" target="_blank">
                        <label style={{fontFamily:'Futura'}}>Download Resume</label></a>
                </div>
            </div>
        </div>
    )
}

export default About