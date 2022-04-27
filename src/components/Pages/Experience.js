import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Experience.module.css'

const Experience =()=> {

    const experienceList = Data.Experience

return (
    <div>
    <h3 style={{marginLeft: "10%"}}>My Experiences</h3>
        {experienceList.map((experience)=> 
        <div className={classes.parent} key={experience.id}>
            <ProjectModal experience={experience}/>
        </div> )}
    </div>
)
}

export default Experience