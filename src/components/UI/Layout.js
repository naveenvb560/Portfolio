import React from "react";
import background from '../../assets/background.jpg'
import shape1 from '../../assets/shape1.png'
import shape2 from '../../assets/shape2.png'
import shape3 from '../../assets/shape3.png'
import shape4 from '../../assets/shape4.png'
import shape5 from '../../assets/shape5.png'
import classes from './Layout.module.css'

const Layout =(props)=> {

    const layoutStyles = {
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "100%",
        position: "absolute",
        minWidth: "100%",
        minHeight: "100%",
        top: "0",
        left: "0"
    }

    return (
        <div style={layoutStyles}>
            <img className={classes.shape4} src={shape4} alt="" />
            <img className={classes.shape5} src={shape5} alt="" />
            <img className={classes.shape52} src={shape5} alt="" />
            <img className={classes.shape53} src={shape5} alt="" />
            {props.children}
        </div>
    )
}

export default Layout