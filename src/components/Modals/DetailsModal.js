import React from 'react'
import ReactDOM from 'react-dom';
import classes from './DetailsModal.module.css'
import Button from '../UI/Button';

const DetailsModal = (props) => {
    const viewProjectStyle = {
        backgroundColor: "#BB2222",
        borderRadius: "9px",
        paddingRight: "25px",
        paddingLeft: "25px",
        paddingTop: "5px",
        paddingBottom: "5px",
        float: "right",
        color: "white",
        fontSize: "16px",
        fontFamily: 'Futura',
    }

    return ReactDOM.createPortal(
        <div className={classes.Modal}>
            <div className={classes.Modalcontent}>
            {props.children}
            </div>
            <div>
                <Button style={viewProjectStyle} onClick={props.clear}>Close</Button>
            </div>
        </div>
        , document.getElementById("modal-root")
    )
}


export default DetailsModal