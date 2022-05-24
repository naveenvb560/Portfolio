import React from "react";
import classes from './Home.module.css'

import Footer from "../UI/Footer";
import About from "../SubPages/About";
import Education from "../SubPages/Education";
import Contact from "../SubPages/Contact";

const Home = () => {


    return (
        <div>
        <About></About>
        <br /><br /> <br />
        <Education></Education>
        <br /><br /> <br />
        <Contact></Contact>
        <br /><br /> <br />         <br /><br /> <br />
        <Footer></Footer>
        </div>

    )

}


export default Home