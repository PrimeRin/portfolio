import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./cv.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>
        Offers a range of exceptional web development services designed to help businesses thrive online. 
          <br />
         Expertise includes responsive design, custom & secure development.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div 
        whileInView={{left: '14rem'}}
        initial={{left: '25rem'}}
        transition={transition}
        style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Expert in creating visually appealing designs using Figma, Sketch, Photoshop, and Adobe Illustrator."}
          />
        </motion.div>

        <motion.div
         whileInView={{left: '-4rem', top: "12rem"}}
         initial={{left: '-8rem', top: "12rem"}}
         transition={transition}
         style={{ top: "12rem", left: "-4rem" }}
         >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Proficient in HTML, CSS, and JavaScript, with a strong focus on building responsive and dynamic web applications using React."}
          />
        </motion.div>

        <motion.div
         whileInView={{left: '12rem', top: "19rem"}}
         initial={{left: '16rem', top: "19rem"}}
         transition={transition}
         style={{ top: "19rem", left: "12rem" }}
         >
          <Card
            emoji={Humble}
            heading={"Database"}
            detail={"Experienced in database management and optimization, with expertise in SQL and NoSQL databases."}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
