import React from "react";

const Card =(props)=> {

    const cardStyle ={

            transition: "0.3s",
            borderRadius: "25px",
            padding: "1%",
            marginLeft: "10%",
            marginRight: "10%",
            background: "linear-gradient(rgb(5 5 5), rgb(17 14 27))",
            "&:hover": {
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
          }
    }

    return (
        <div style={cardStyle}>
            {props.children}
        </div>
    )
}

export default Card