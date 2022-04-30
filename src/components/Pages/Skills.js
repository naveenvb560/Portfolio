import React from "react";
import classes from './Skills.module.css'
import SkillsModal from "../Modals/SkillsModal";
import Data from '../../assets/Data.json'
import Card from '../UI/Card'

const Skills =()=> {
    const skillsArray = Data.Skills

    const dynamicClassName=(id)=> {
        if (id%4 === 0) {
            return classes.item4
        }
        const item = `item${id%4}`
        return classes[item]
    } 

    return (
        <React.Fragment>
        <h3 style={{ color: "rgb(204 198 198 / 93%)", marginLeft: "10%", fontSize: "23px"}}>My Skills</h3>
        <div className={classes.container}>
            {skillsArray.map((skill)=>
               <div key={skill.id} className={dynamicClassName(skill.id)}> 
                           <Card> 
                   <SkillsModal name={skill.name} percentage={skill.percentage}/>   </ Card> 
                </div> 
        )}
        </div>
        </React.Fragment>

    )
}

export default Skills