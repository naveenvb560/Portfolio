import React, { useState } from "react";
import classes from './ProjectModal.module.css'
import Button from '../UI/Button'
import DetailsModal from "./DetailsModal";

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

    return (
        <div className={classes.parentdiv}>
            {viewModal ? <DetailsModal itemData={item} details={viewModal} clear={clearProjectModalHandler}>Hello</DetailsModal> : null}
            <div className={classes.itemdetails}>
                <div className={classes.header}>
                    <h4 className={classes.projectname}>{item.name}</h4>
                </div>
                <div>
                    <p className={classes.projectdetails}>{item.details}</p>
                </div>
                <div className={classes.projectbutton}>
                    <Button onClick={viewProjectHandler}>View More</Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal