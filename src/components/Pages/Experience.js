import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";
import {dynamicClassName} from '../../Utils/utilFunctions'
import wipro from '../../assets/wipro.png'

const Experience =()=> {

    const experienceList = Data.Experience

return (
    <div>
    <h3 style={{marginLeft: "10%",  color: "rgb(204 198 198 / 93%)", fontSize: "25px"}}>My Experiences</h3>
    <div className={classes.container}>
        {experienceList.map((experience)=> 
        <div className={dynamicClassName(experience.id, classes, 3)} key={experience.id}> 
        <div className={classes.flipcard}>
        <div className={classes.flipcardinner}>
          <div className={classes.flipcardfront}><Card>
            <ProjectModal experience={experience}/></Card>
            </div> 
        <div className={classes.flipcardback}>
            <img style={{width: "50%", marginTop: "15%", marginLeft: "30%"}} src={wipro} ></img>
            </div>
        </div> </div> </div>)}
        </div>
    </div>
)
}

export default Experience