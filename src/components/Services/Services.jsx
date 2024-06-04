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
    <div className="services">
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          officia.
          <br />
          Lorem ipsum dolor sit amet.
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
            detail={"Figma, Sketch, Photoshop, Adobe"}
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
            detail={"HTML, CSS, JS, React"}
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
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet consectetur "}
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
