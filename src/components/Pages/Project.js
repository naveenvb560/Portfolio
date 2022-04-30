import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'

const Project =()=> {

    const projectList = Data.projects

return (
    <div>
    <h3 style={{marginLeft: "10%", color: "rgb(204 198 198 / 93%)" , fontSize: "23px"}}>My Projects</h3>
        {projectList.map((project)=> 
        <div className={classes.parent} key={project.id}>
            <ProjectModal project={project}/>
        </div> )}
    </div>
)
}

export default Project