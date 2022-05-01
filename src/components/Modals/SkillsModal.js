import React from "react";
import classes from './SkillsModal.module.css'

const SkillsModal = (props) => {

    const percentage = props.percentage
    const degree = Math.round(180 * (percentage/100)) 

    const stl = {
      animation: `${classes.fill_animation} ease-in-out 2s 1.2s`,
      transform: `rotate(${degree}deg)`
    }

    return (
        <div style={{textAlign: "center", marginTop: "-5%", padding: "0 40px"}}>
        <div className={classes.circlewrap}>
        <div className={classes.circle}>
          <div style={stl} className={`${classes.mask} ${classes.full}`}>
            <div className={classes.fill} style={stl} ></div>
          </div>
          <div className={`${classes.mask} ${classes.half}`}>
            <div className={classes.fill} style={stl} ></div>
          </div>
          <div className={classes.insidecircle}>{`${percentage}%`}</div>
        </div>
      </div>
      <div className={classes.text}> {props.name} </div>
      </div>
    )
}

export default SkillsModal