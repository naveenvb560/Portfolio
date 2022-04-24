import React from "react";
import classes from './Skills.module.css'
import SkillsModal from "../Modals/SkillsModal";
import Data from '../../assets/Data.json'

const Skills =()=> {
    const skillsArray = Data.Skills

    const dynamicClassName=(id)=> {
        if (id%3 === 0) {
            return classes.item3
        }
        const item = `item${id%3}`
        return classes[item]
    } 

    return (
        <React.Fragment>
        <h2>Skills</h2>
        <br />
        <br />
        <div className={classes.container}>
            {skillsArray.map((skill)=>           
               <div key={skill.id} className={dynamicClassName(skill.id)}> 
                   <SkillsModal name={skill.name} percentage={skill.percentage}/>  
                </div>  
        )}
        </div>
        </React.Fragment>

    )
}

export default Skills