import React, {useState} from "react";
import classes from './ProjectModal.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'
import DetailsModal from "./DetailsModal";

const ProjectModal = (props) => {

    const item = props.project? props.project: props.experience
    const itemName = props.project? "project": "experience"
    const [viewModal, setViewModal] = useState(false)

    const viewProjectHandler=()=> {

        setViewModal({
            item: itemName,
            id: props.id,
        })
    }

    const clearProjectModalHandler =()=> {
        setViewModal(false)
    }

    const viewProjectStyle = {
        backgroundColor: "#BB2222",
        borderRadius: "9px",
        paddingRight: "25px",
        paddingLeft: "25px",
        paddingTop: "5px",
        paddingBottom: "5px",
        color: "white",
        fontSize: "16px",
        fontFamily: 'Futura',
    }

    const projectModal = {
        marginLeft: "5%",
        marginRight: "5%",
    }
    
    return (
        <Card>
            {viewModal ?<DetailsModal itemData={item} details={viewModal} clear={clearProjectModalHandler}>Hello</DetailsModal>: null}
            <div style={projectModal}>
                <div className={classes.header}>
                    <h4 className={classes.projectname}>{item.name}</h4>
                </div>
                <div>
                    <p className={classes.projectdetails}>{item.details}</p>
                </div>
                <div className={classes.projectbutton}>
                <Button onClick={viewProjectHandler} style={viewProjectStyle}>View More</Button>
                </div> 
            </div>
        </Card>
    )
}

export default ProjectModal