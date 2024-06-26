import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/me.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Prime</span>
          <span>
            Web Developer with high motivation and inspirational to expand my
            knowledge and enhance my skills for continuous personal and
            professional growth.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/PrimeRin">
          <img src={Github} alt="" />
          </a>
         <a href="https://medium.com/@primedruk312">
         <img src={LinkedIn} alt="" />
         </a>
          <a href="https://www.instagram.com/walther.alanxander/">
          <img src={Instagram} alt="" />
         </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
         initial={{top: '-4%', left: '74%'}} 
         whileInView={{left: '68%'}}
         transition={transition}
         style={{top: '-4%', left: '68%'}}
         className="floating-div"
        >
          <FloatingDiv image={crown} txt1={"Web"} txt2={"Developer"} />
        </motion.div>

        <motion.div
        initial={{left: '9rem', top: '18rem'}} 
        whileInView={{left: '0rem'}}
        transition={transition}
        style={{top: '18rem', left: '0rem'}}
        className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1={"Responsive Web"} txt2={"Design"} />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
