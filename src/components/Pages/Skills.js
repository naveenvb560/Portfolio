import React from "react";
import classes from './Skills.module.css'
import SkillsModal from "../Modals/SkillsModal";
import Data from '../../assets/Data.json'
import Card from '../UI/Card'
import {dynamicClassName} from '../../Utils/utilFunctions'

const Skills =()=> {
    const skillsArray = Data.Skills

    return (
        <React.Fragment>
        <h3 style={{ color: "rgb(204 198 198 / 93%)", marginLeft: "10%", fontSize: "25px"}}>My Skills</h3>
        <div className={classes.container}>
            {skillsArray.map((skill)=>
               <div key={skill.id} className={dynamicClassName(skill.id, classes, 4)}> 
                           <Card> 
                   <SkillsModal name={skill.name} percentage={skill.percentage}/>   </ Card> 
                </div> 
        )}
        </div>
        </React.Fragment>

    )
}

export default Skills