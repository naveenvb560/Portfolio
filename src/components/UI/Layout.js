import React from "react";
import background from '../../assets/background.jpg'

const Layout =(props)=> {

    const layoutStyles = {
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0"
    }

    return (
        <div style={layoutStyles}>
            {props.children}
        </div>
    )
}

export default Layout