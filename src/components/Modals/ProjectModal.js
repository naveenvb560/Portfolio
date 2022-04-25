import React from "react";
import classes from './ProjectModal.module.css'
import Button from '../UI/Button'

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

    const projectModal = project.id %2 === 0 ?{
        marginLeft: "33%",
        width: "60%"
    }: {
        marginLeft: "10%",
        width: "60%"
    }

    const projectName = project.id %2 === 0 ?{
        color: "#3AF1F8",
        fontSize: "25px",
        fontFamily: "Bahnschrift",
        textAlign: "left"
       }: 
       {
        color: "#3AF1F8",
        fontSize: "25px",
        fontFamily: "Bahnschrift", 
        textAlign: "center"}
    
    return (
        <React.Fragment>
            <br />
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
        </React.Fragment>
    )
}

export default ProjectModal