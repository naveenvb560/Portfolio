import React from "react";
import classes from './Skills.module.css'
import SkillsModal from "../Modals/SkillsModal";
import Data from '../../assets/Data.json'
import Card from '../UI/Card'

const Skills =()=> {
    const skillsArray = Data.Skills

    return (
        <div className={classes.maincontainer}>
        <h3 style={{ color: "var(--secondary-color)", margin: "3% 0% 1% 10%", fontSize: "25px"}}>My Skills</h3>
        <div className={classes.container}>
            {skillsArray.map((skill)=>
               <div key={skill.id} className={classes.item}> 
                           <Card> 
                   <SkillsModal name={skill.name} percentage={skill.percentage}/>   </ Card> 
                </div> 
        )}
        </div>
        </div>

    )
}

export default Skills