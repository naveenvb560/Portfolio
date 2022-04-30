import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";
import {dynamicClassName} from '../../Utils/utilFunctions'

const Experience =()=> {

    const experienceList = Data.Experience

return (
    <div>
    <h3 style={{marginLeft: "10%",  color: "rgb(204 198 198 / 93%)", fontSize: "25px"}}>My Experiences</h3>
    <div className={classes.container}>
        {experienceList.map((experience)=> 
        <div className={dynamicClassName(experience.id, classes, 3)} key={experience.id}> <Card>
            <ProjectModal experience={experience}/></Card>
        </div> )}
        </div>
    </div>
)
}

export default Experience