import React, {useEffect} from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";
import AOS from "aos"
import "aos/dist/aos.css"

const Experience = () => {

    const experienceList = Data.Experience
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    });
    return (
        <div data-aos='fade-right' data-aos-once="true" className={classes.maincontainer}>
            <h3 style={{ marginLeft: "10%", marginTop: "3%", color: "var(--secondary-color)", fontSize: "25px" }}>My Experiences</h3>
            <div className={classes.container}>
                {experienceList.map((experience) => <div key={experience.id} data-aos-once="true" data-aos='flip-left'><Card>
            <ProjectModal experience={experience}/></Card></div>
                )}
            </div>
        </div>
    )
}

export default Experience