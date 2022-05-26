import React, { useState, useEffect } from "react";
import MediaLink from '../SubPages/MediaLinks'
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

const Header = () => {
    const [expanded, setExpanded] = useState(false)
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
        setExpanded((previousState) => {
            return !previousState
        })
    }
    console.log(expanded)
    return (
        <div >
            <div >
                <a onClick={hamburgerMenuHandler} className={classes.hamburger}>
                    <span className={classes.line}></span>
                    <span className={classes.line}></span>
                    <span className={classes.line}></span>
                </a>
            </div>
            <div data-aos-easing='ease-out-quad' data-aos='flip-right' className={expanded ? classes.container : `${classes.container} ${classes.displayhamburger}`}>
                    <div className={classes.navlinks}>
                        <NavLink className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="/">Home</NavLink>
                        <NavLink className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="Projects">Projects</NavLink>
                        <NavLink className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="/Experiences">Experiences</NavLink>
                        <NavLink className={classes.item} style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle} to="Skills">Skills</NavLink></div>
                    <div className={classes.medialink}>
                        <MediaLink />
                    </div>
            </div>
        </div>
    )

}

export default Header