import React, {useEffect} from "react";
import Data from '../../assets/Data.json'
import ProjectModal from '../Modals/ProjectModal'
import classes from '../Pages/Project.module.css'
import Card from "../UI/Card";
import AOS from "aos"
import "aos/dist/aos.css"

const Project = () => {

    const projectList = Data.projects
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    });

    return (
        <div data-aos='fade-right' className={classes.maincontainer}>
            <h3 style={{ marginLeft: "10%", marginTop: "3%", color: "var(--secondary-color)", fontSize: "25px" }}>My Projects</h3>
            <div className={classes.container}>
                {projectList.map((project) =><div key={project.id} data-aos='flip-right'><Card>
                                    <ProjectModal project={project} /></Card></div>
                    
                       )}
            </div>
        </div>
    )
}

export default Project