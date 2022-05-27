import React from "react";
import classes from './Contact.module.css'
import Button from '../UI/Button'
const Contact = () => {

    return (
        <div className={classes.container}>
            <div>
                <h2>Contact</h2>
            </div>
            <div className={classes.contactsubcontainer}>
                <div className={classes.contactinput}>
                    <div className={classes.contactelements}>
                        <input id="1" type="text" className={classes.inputstyle} placeholder="Full Name" />
                        <input id="2" type="text" className={classes.inputstyle} placeholder="Address" />
                    </div>
                    <div className={classes.contactelements}>
                        <input type="text" className={classes.textareastyle} placeholder="Enter your message" />
                    </div>
                    <div className={classes.contactelements}>
                        <Button>Send Message</Button>
                    </div>
                </div>
                <div>
                    <div className={classes.contactsubelements}>
                        <h3>Email</h3>
                        <p>naveenvb560@gmail.com</p>
                    </div>
                    <div className={classes.contactsubelements}>
                        <h3>Address</h3>
                        <p>Kumarakom, Kottayam, Kerala</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact