import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'

const Project =()=> {

    const projectList = Data.projects

return (
    <div>
    <h2 style={{marginLeft: "10%"}}>My Projects</h2>
        {projectList.map((project)=> 
        <div className={classes.parent} key={project.id}>
            <ProjectModal project={project}/>
        </div> )}
    </div>
)
}

export default Project