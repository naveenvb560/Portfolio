import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";
import {dynamicClassName} from '../../Utils/utilFunctions'
import wipro from '../../assets/wipro.png'

const Project =()=> {

    const projectList = Data.projects
 

return (
    <div>
    <h3 style={{marginLeft: "10%", marginTop: "3%", color: "var(--secondary-color)" , fontSize: "25px"}}>My Projects</h3>
    <div className={classes.container}>
        {projectList.map((project)=> 
        <div className={dynamicClassName(project.id, classes, 3)} key={project.id}> 
        <div className={classes.flipcard}>
        <div className={classes.flipcardinner}>
          <div className={classes.flipcardfront}><Card>
            <ProjectModal project={project}/></Card>
        </div> 
        <div className={classes.flipcardback}>
            <img style={{width: "50%", marginTop: "15%", marginLeft: "30%"}} src={wipro} ></img>
    </div>
        </div> </div> </div>)}
        </div>
    </div>
)
}

export default Project