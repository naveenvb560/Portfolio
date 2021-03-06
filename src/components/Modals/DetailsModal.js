import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import classes from './DetailsModal.module.css'
import { getSkillsForProject } from '../../Utils/utilFunctions'
import AOS from "aos"
import "aos/dist/aos.css"

const DetailsModal = (props) => {
    let renderData = null
    const details = props.details
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    });
    if (details.item === 'project') {
        const project = props.itemData
        const skillsList = getSkillsForProject(project.techused)
        renderData =
            <div data-aos-once="true" data-aos='slide-right' data-aos-duration="4000">
                <div className={classes.projectnamecontainer}>
                    <h4 className={classes.projectname}>{project.name}</h4>
                    {project.status === 'completed' ? <img alt="icons" className={classes.projectIcon} src="https://img.icons8.com/fluency/96/000000/checked-truck.png" /> :
                        <img alt="icons" className={classes.projectIcon} src="https://img.icons8.com/nolan/96/in-progress.png" />
                    }
                </div>
                <div>
                <p className={classes.details}>{project.details}</p>
                </div>
                <div>
                    <h5 className={classes.smallheading}>Technologies used:</h5>
                    <ul>
                        {skillsList.map((skill) => <li key={skill.id} className={classes.listitems} >{skill.name}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className={classes.smallheading}>Team members:</h5>
                    <label className={classes.labelstyle}>{project.team_members}</label>
                </div>
                <div >
                    <h5 className={classes.smallheading}>Source Code/Link:</h5>
                    <label className={classes.labelstyle}><a href={project.link} target="_blank"/>{project.link}</label>
                </div>
            </div> 
    }
    else {
        const experience = props.itemData
        const projectList = getSkillsForProject(experience.skills)
        renderData =
            <div data-aos-once="true" data-aos='slide-right' data-aos-duration="4000">
                <div className={classes.projectnamecontainer}>
                    <h4 className={classes.projectname}>{experience.name}</h4>
                    {experience.status === 'completed' ? <img alt="icons" className={classes.projectIcon} src="https://img.icons8.com/fluency/96/000000/checked-truck.png" /> :
                        <img alt="icons" className={classes.projectIcon} src="https://img.icons8.com/nolan/96/in-progress.png" />
                    }
                </div>
                <div>
                <p className={classes.details}>{experience.details}</p>
                </div>
                <div>
                    <h5 className={classes.smallheading}>Designation:</h5>
                    <label className={classes.labelstyle}>{experience.designation}</label>
                </div>
                <div>
                    <h5 className={classes.smallheading}>Joined Date:</h5>
                    <label className={classes.labelstyle}>{experience.joined_date}</label>
                </div>
                {experience.status === "completed" ?<div>
                    <h5 className={classes.smallheading}>Resigned Date:</h5>
                    <label className={classes.labelstyle}>{experience.resigned_date}</label>
                </div>: null}
                <div>
                    <h5 className={classes.smallheading}>Experience in months:</h5>
                    <label className={classes.labelstyle}>{experience.months}</label>
                </div>
                <div>
                    <h5 className={classes.smallheading}>Skills Worked:</h5>
                    <ul>
                        { projectList? projectList.map((project) => <li key={project.id} className={classes.listitems} >{project.name}</li>): null}
                    </ul>
                </div>
                <div>
                    <h5 className={classes.smallheading}>Awards:</h5>
                    <ul>
                        { experience.awards? experience.awards.map((award) => <div key={award.id} ><li className={classes.listitems} >
                        <div className={classes.projectnamecontainer}>
                        <h5 className={classes.smallheading}>{award.name}</h5>
                        <a href={award.link} download><img alt="icons" style={{width: "37%"}} src="https://img.icons8.com/plasticine/100/000000/certificate.png"/></a>
                        </div>
                        <p className={classes.awardetails}>{award.details}</p>
                        </li> 
                        </div>
                        )                        
                        : null}
                    </ul>
                </div>
            </div>
    }

    return ReactDOM.createPortal(
        <div data-aos='zoom-in' data-aos-once="true" className={classes.modalcontainer}>
            <div className={classes.modal}>
                <button onClick={props.clear} className={classes.link2}></button>
                {renderData}
            </div>
        </div>
        , document.getElementById("modal-root")
    )
}


export default DetailsModal