import React, { useState } from "react";
import classes from './ProjectModal.module.css'
import Button from '../UI/Button'
import DetailsModal from "./DetailsModal";
import TCS from '../../assets/TCS.png'
import Wipro from '../../assets/Wipro.png'

const ProjectModal = (props) => {

    const item = props.project ? props.project : props.experience
    const itemName = props.project ? "project" : "experience"
    const [viewModal, setViewModal] = useState(false)

    const viewProjectHandler = () => {

        setViewModal({
            item: itemName,
            id: props.id,
        })
    }

    const clearProjectModalHandler = () => {
        setViewModal(false)
    }
    console.log(item)
    return (
        <div className={classes.parentdiv}>
            {viewModal ? <DetailsModal key={viewModal.id} itemData={item} details={viewModal} clear={clearProjectModalHandler}>Hello</DetailsModal> : null}
            <div className={classes.itemdetails}>
                <div className={classes.header}>
                {itemName === "experience" ?
                <div className={classes.companyiconcontainer}>
                    <h4 className={classes.projectname}>{item.name}</h4>                  
                  {item.id === 1 ? <img alt="icons" className={classes.companyicon} src={Wipro} />: <img alt="icons" className={classes.companyicon} src={TCS} /> }
                    
                </div>:
                <h4 className={classes.projectname}>{item.name}</h4> } </div>
                <div>
                    <p className={classes.projectdetails}>{item.description}</p>
                </div>
                <div className={classes.projectbutton}>
                    <Button onClick={viewProjectHandler}>View More</Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal