import React from "react";
import classes from './About.module.css'
import photo from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'
import Button from "../UI/Button";
import myData from '../../assets/Data.json';
import { useNavigate } from "react-router-dom";
const About =()=> {

    const navigate = useNavigate()
    const viewProjectHandler=()=> {

        navigate('Projects')
    }

    const downloadResumeStyle = {
        paddingRight: "15px",
        paddingLeft: "15px",
        paddingTop: "5px",
        paddingBottom: "5px",
        borderBottom: "3px solid var(--addon-color)",
        textDecoration: 'none',
        color: "var(--secondary-color)",
        fontSize: "16px",
        fontFamily: 'Futura',
    }
    const AboutDescription = myData.About.description 
    return (
        <div className={classes.container}>
        {/* <div className={classes.item1}>
            <img className={classes.img} src={photo} alt="profile_pic"></img>
        </div>
        <div className={classes.item2}>
            <h2>Hello I'm <span style={{color: "var(--addon-color)"}}>Naveen V B.</span><span style={{display: "inline-block"}}>I'm a Software Engineer.</span></h2>
        </div>
        <div className={classes.item3}>
            <p>{AboutDescription}</p>
        </div>
        <div className={classes.item6}>
        <div className={classes.item4}>
            <Button onClick={viewProjectHandler} >View Projects</Button>
        </div>
        <div className={classes.item5}>
            <a href={Resume} style={downloadResumeStyle} download>Download Resume</a>
        </div> 
        </div>  */}

<div>
<div className={classes.item1}>
            <img className={classes.img} src={photo} alt="profile_pic"></img>
        </div>
        </div>
        <div>
        <div className={classes.item2}>
            <h2>Hello I'm <span style={{color: "var(--addon-color)"}}>Naveen V B.</span><span style={{display: "inline-block"}}>I'm a Software Engineer.</span></h2>
        </div>
        <div className={classes.item3}>
            <p>{AboutDescription}</p>
        </div>
        <div className={classes.item6}>
        <div className={classes.item4}>
            <Button onClick={viewProjectHandler} >View Projects</Button>
        </div>
        <div className={classes.item5}>
            <a href={Resume} style={downloadResumeStyle} download>Download Resume</a>
        </div> 
        </div> 
        </div>

    </div>
    )
}

export default About