import React from "react";
import MediaLink from '../Media/MediaLinks'
import classes from './Header.module.css'

const Header = () => {

    return (
<div className={classes.container}>
  <div className={classes.item1}>Home</div>
  <div className={classes.item2}>Projects</div>
  <div className={classes.item3}>Experiences</div>  
  <div className={classes.item4}>About</div>
  <div className={classes.item5}>
      <MediaLink />
  </div>
</div>
    )

}

export default Header