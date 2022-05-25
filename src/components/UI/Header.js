import React, {useState, useEffect} from "react";
import MediaLink from '../SubPages/MediaLinks'
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

const Header = () => {
    const [expanded, setExpanded] = useState(false)
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    });
    const activeStyle ={
        textAlign: "center",
        color: "var(--secondary-color)",
        fontFamily: "Futura",
        textDecoration: 'none',
    }

    const inactiveStyle ={
        textAlign: "center",
        color: "var(--tertiary-color)",
        fontFamily: "Futura",
        textDecoration: 'none',
    }


    const hamburgerMenuHandler=()=> {
            setExpanded((previousState)=> {
                return !previousState
            })
        }
    return (
        <div data-aos='zoom-in-up'>
            <div >
                <a onClick={hamburgerMenuHandler} className={classes.hamburger}>
                    <span className={classes.line}></span>
                    <span className={classes.line}></span>
                    <span className={classes.line}></span>
                </a>
            </div>
<div className={expanded ? classes.container : `${classes.container} ${classes.displayhamburger}`}>
  <div className={classes.item1}>
  <NavLink style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle} to="/">Home</NavLink>
  </div>
  <div className={classes.item2}>
  <NavLink style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle} to="Projects">Projects</NavLink>
  </div>
  <div className={classes.item3}>
  <NavLink style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle} to="/Experiences">Experiences</NavLink>
      </div>  
  <div className={classes.item4}>
  <NavLink style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle} to="Skills">Skills</NavLink></div>
  <div className={classes.item5}>
      <MediaLink />
  </div>
</div>
</div>
    )

}

export default Header