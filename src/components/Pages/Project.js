import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";

const Project = () => {

    const projectList = Data.projects


    return (
        <div className={classes.maincontainer}>
            <h3 style={{ marginLeft: "10%", marginTop: "3%", color: "var(--secondary-color)", fontSize: "25px" }}>My Projects</h3>
            <div className={classes.container}>
                {projectList.map((project) =><Card>
                                    <ProjectModal project={project} /></Card>
                    
                       )}
            </div>
        </div>
    )
}

export default Project