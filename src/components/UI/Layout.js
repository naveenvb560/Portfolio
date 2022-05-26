import React from "react";
import shape1 from '../../assets/shape1.png'
import shape2 from '../../assets/shape2.png'
import shape4 from '../../assets/shape4.png'
import shape5 from '../../assets/shape5.png'
import classes from './Layout.module.css'

const Layout =(props)=> {
    

    return (
        <div>
            <img className={classes.shape2} src={shape2} alt="" />
            <img className={classes.shape4} src={shape4} alt="" />
            <img className={classes.shape5} src={shape1} alt="" />
            <img className={classes.shape52} src={shape5} alt="" />
            {props.children}
        </div> 
    )
}

export default Layout