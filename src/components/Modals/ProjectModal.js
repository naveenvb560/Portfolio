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
    return (
        <React.Fragment>
            <br />
            <div className={classes.projectmodal}>
                <div className={classes.header}>
                    <h4 className={classes.projectname}>{project.name}</h4>
                </div>
                <div>
                    <p className={classes.projectdetails}>{project.details}</p>
                </div>
                <div>
                <Button onClick={viewProjectHandler} style={viewProjectStyle}>View More</Button>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default ProjectModal