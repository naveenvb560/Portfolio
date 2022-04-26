import React from "react";
import classes from './ExperienceModal.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'

const ExperienceModal =(props)=> {

    const experience = props.experience
    const viewExperienceHandler=()=> {

        console.log('worked')
    }
    const viewExperienceStyle = {
        backgroundColor: "#BB2222",
        borderRadius: "9px",
        paddingRight: "25px",
        paddingLeft: "25px",
        paddingTop: "5px",
        paddingBottom: "5px",
        color: "white",
        fontSize: "16px",
        fontFamily: 'Bahnschrift',
    }

    const ExperienceModal = {
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%"
    }

    const ExperienceName = {
        color: "#3AF1F8",
        fontSize: "25px",
        fontFamily: "Bahnschrift",
        textAlign: "left"
       }
    

    return (
        <Card>
            <br />
            <div style={ExperienceModal}>
                <div className={classes.header}>
                    <h4 style={ExperienceName}>{experience.name}</h4>
                </div>
                <div>
                    <p className={classes.experiencedetails}>{experience.details}</p>
                </div>
                <div className={classes.experiencebutton}>
                <Button onClick={viewExperienceHandler} style={viewExperienceStyle}>View More</Button>
                </div> 
            </div>
        </Card>

    )
}

export default ExperienceModal