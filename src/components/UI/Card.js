import React from "react";

const Card =(props)=> {

    const cardStyle ={

            transition: "0.3s",
            borderRadius: "25px",
            padding: "1%",
            marginLeft: "10%",
            marginRight: "10%",
            background: "linear-gradient(to left, #916f081a, #1e1e1eb3)"
    }

    return (
        <div style={cardStyle}>
            {props.children}
        </div>
    )
}

export default Card