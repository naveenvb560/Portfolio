import React from "react";
import MediaLink from '../SubPages/MediaLinks'
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {

    const activeStyle ={
        fontSize: "24px",
        textAlign: "center",
        color: "var(--secondary-color)",
        fontFamily: "Futura",
        textDecoration: 'none',
    }

    const inactiveStyle ={
        fontSize: "22px",
        textAlign: "center",
        color: "var(--tertiary-color)",
        fontFamily: "Futura",
        textDecoration: 'none',
    }

    return (
<div className={classes.container}>
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

    )

}

export default Header