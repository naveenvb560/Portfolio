import React, { useState, useEffect } from "react";
import MediaLink from '../SubPages/MediaLinks'
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

const Header = () => {
    const [notexpanded, setnotexpanded] = useState(true)
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    });
    const activeStyle = {
        textAlign: "center",
        color: "var(--secondary-color)",
        fontFamily: "Futura",
        textDecoration: 'none',
    }

    const inactiveStyle = {
        textAlign: "center",
        color: "var(--tertiary-color)",
        fontFamily: "Futura",
        textDecoration: 'none',
    }


    const hamburgerMenuHandler = () => {
        setnotexpanded((previousState) => {
            return !previousState
        })
    }
    const closeModal=()=> {
        setnotexpanded(true)
    }

    return (
        <div ><div >
                <a onClick={hamburgerMenuHandler}
                className={notexpanded ? classes.hamburger : `${classes.hamburger} ${classes.closehamburger}`}>
                    <span className={classes.line}></span>
                    <span className={classes.line}></span>
                    <span className={classes.line}></span>
                </a>
            </div> 
            <div data-aos-easing='ease-out-quad' data-aos='flip-right' data-aos-once="true" className={notexpanded ? classes.container : `${classes.container} ${classes.displayhamburger}`}>
                    <div className={classes.navlinks}>
                        <NavLink onClick={closeModal} className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="/">Home</NavLink>
                        <NavLink onClick={closeModal} className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="/Projects">Projects</NavLink>
                        <NavLink onClick={closeModal} className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="/Experiences">Experiences</NavLink>
                        <NavLink onClick={closeModal} className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="/Skills">Skills</NavLink></div>
                    <div className={classes.medialink}>
                        {notexpanded ? <MediaLink />: <div className={classes.submedialink}><div>
                        <p className={classes.copyright} >@2022 | created & designed by Naveen V B</p> </div>
                        <div className={classes.slidemenumedialink}>
                            <MediaLink /> </div> </div>
                        }
                        
                    </div>
            </div>
        </div>
    )

}

export default Header