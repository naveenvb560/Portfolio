import React from "react";
import classes from './Home.module.css'
import photo from '../../assets/profile.jpg'
import myData from '../../assets/Data.json';
import Resume from '../../assets/Resume.pdf'
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import Education from "../SubPages/Education";

const Home = () => {
    const navigate = useNavigate()
    const viewProjectHandler=()=> {

        navigate('Projects')
    }

    const downloadResumeStyle = {
        borderRadius: "9px",
        paddingRight: "25px",
        paddingLeft: "25px",
        paddingTop: "5px",
        paddingBottom: "5px",
        borderBottom: "3px solid #BB2222",
        textDecoration: 'none',
        color: "white",
        fontSize: "16px",
        fontFamily: 'Futura',
    }

    const AboutDescription = myData.About.description 
    return (
        <div>
        <div className={classes.container}>
            <div className={classes.item1}>
                <img className={classes.img} src={photo} alt="profile_pic"></img>
            </div>
            <div className={classes.item2}>
                <h2>Hello I'm <span style={{color: "#BB2222"}}>Naveen V B.</span><span style={{display: "inline-block"}}>I'm a Software Engineer.</span></h2>
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
        <div>
            <Education></Education>
        </div>
        <Footer></Footer>
        </div>

    )

}


export default Home