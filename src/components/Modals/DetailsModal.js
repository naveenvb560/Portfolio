import React from 'react'
import ReactDOM from 'react-dom';
import classes from './DetailsModal.module.css'

const DetailsModal = (props) => {
    let renderData = null

    const details = props.details
    if (details.item === 'project') {
        const project = props.itemData
        
        renderData = <div>
            <h4 className={classes.projectname}>{project.name}</h4>
            <p>{project.details}</p>
            <table>
                <tr>
                <td>
                    <h5 className={classes.smallheading}>Technologies used  </h5>
                </td>
                <td>
                <img style={{width: "50%"}} src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-technology-new-media-flaticons-lineal-color-flat-icons-3.png"/>
                </td>
                </tr>
            </table>
        </div>
    }
    else {

    }

    return ReactDOM.createPortal(
            <div className={classes.modalcontainer}>
                <div className={classes.modal}>
                <button onClick={props.clear} className={classes.link2}></button>
                    {renderData}
                </div>
            </div>
        , document.getElementById("modal-root")
    )
}


export default DetailsModal