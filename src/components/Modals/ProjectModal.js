import React from "react";
import classes from './ProjectModal.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'

const ProjectModal = (props) => {

    const project = props.project
    const viewProjectHandler=()=> {

        console.log('worked')
    }
    const viewProjectStyle = {
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

    const projectModal = {
        marginLeft: "5%",
        marginRight: "5%",
    }

    const projectName = {
        color: "#3AF1F8",
        fontSize: "25px",
        fontFamily: "Bahnschrift",
        textAlign: "left"
       }
    
    return (
        <Card>
            <div style={projectModal}>
                <div className={classes.header}>
                    <h4 style={projectName}>{project.name}</h4>
                </div>
                <div>
                    <p className={classes.projectdetails}>{project.details}</p>
                </div>
                <div className={classes.projectbutton}>
                <Button onClick={viewProjectHandler} style={viewProjectStyle}>View More</Button>
                </div> 
            </div>
        </Card>
    )
}

export default ProjectModal