import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";
import {dynamicClassName} from '../../Utils/utilFunctions'

const Project =()=> {

    const projectList = Data.projects
 

return (
    <div>
    <h3 style={{marginLeft: "10%", color: "rgb(204 198 198 / 93%)" , fontSize: "25px"}}>My Projects</h3>
    <div className={classes.container}>
        {projectList.map((project)=> 
        <div className={dynamicClassName(project.id, classes, 3)} key={project.id}> <Card>
            <ProjectModal project={project}/></Card>
        </div> )}
        </div>
    </div>
)
}

export default Project