import React from "react";

const Card =(props)=> {

    const cardStyle ={
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            borderRadius: "25px",
            marginTop: "2%",
            padding: "1%",
            marginLeft: "10%",
            marginRight: "10%",
            backgroundColor: "#131218",
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