import React from "react";
import classes from './Contact.module.css'
import Button from '../UI/Button'
const Contact =()=> {

    return (
        <div className={classes.container}>
            <div className={classes.item1}>
            <h2>Contact</h2>
            </div>
            <div className={classes.item2}>
                <input id="1" type="text" className = {classes.inputstyle} placeholder="Full Name"/>
                <input id="2" type="text" className = {classes.inputstyle} placeholder="Address"/>
            </div>
            <div className={classes.item3}>
                <input type="text" className={classes.textareastyle} placeholder="Enter your message" />
            </div>
            <div className={classes.item4}>
                <h3>Email</h3>
                <p>naveenvb560@gmail.com</p>
            </div>
            <div className={classes.item5}>
            <h3>Adress</h3>
            <p>Kumarakom, Kottayam, Kerala</p>
            </div>
            <div className={classes.item6}>
            <Button>Send Message</Button>
            </div>
        </div>

    )
}

export default Contact