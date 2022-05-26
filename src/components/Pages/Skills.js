import React, {useEffect} from "react";
import classes from './Skills.module.css'
import SkillsModal from "../Modals/SkillsModal";
import Data from '../../assets/Data.json'
import Card from '../UI/Card'
import AOS from "aos"
import "aos/dist/aos.css"

const Skills =()=> {
    const skillsArray = Data.Skills
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    });
    return (
        <div data-aos='fade-right' className={classes.maincontainer}>
        <h3 style={{ color: "var(--secondary-color)", margin: "3% 0% 1% 10%", fontSize: "25px"}}>My Skills</h3>
        <div className={classes.container}>
            {skillsArray.map((skill)=>
               <div key={skill.id} data-aos='zoom-out' className={classes.item}> 
                           <Card> 
                   <SkillsModal name={skill.name} percentage={skill.percentage}/>   </ Card> 
                </div> 
        )}
        </div>
        </div>

    )
}

export default Skills