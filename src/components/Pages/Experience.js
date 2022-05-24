import React from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";

const Experience = () => {

    const experienceList = Data.Experience

    return (
        <div className={classes.maincontainer}>
            <h3 style={{ marginLeft: "10%", marginTop: "3%", color: "var(--secondary-color)", fontSize: "25px" }}>My Experiences</h3>
            <div className={classes.container}>
                {experienceList.map((experience) => <Card>
            <ProjectModal experience={experience}/></Card>
                )}
            </div>
        </div>
    )
}

export default Experience