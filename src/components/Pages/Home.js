import React, {useEffect } from "react";
import Footer from "../UI/Footer";
import About from "../SubPages/About";
import Education from "../SubPages/Education";
import Contact from "../SubPages/Contact";
import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    });
    return (
        <div>
            <div data-aos-easing='ease-out-quad' data-aos-once="true" data-aos='zoom-in-up'>
                <About></About>
            </div>
            <div  data-aos='fade-down-left' data-aos-once="true">
                <Education></Education>
            </div>
            <div  data-aos='fade-up-right' data-aos-once="true">
                <Contact></Contact>
            </div>
            <div style={{marginTop: "5rem"}}>
                <Footer></Footer>
            </div>

        </div>

    )

}


export default Home