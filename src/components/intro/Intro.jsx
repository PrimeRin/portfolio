import React from "react";
import "./Intro.css";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
          <span>Prime</span>
          <span>
            Web Developer with high motivation and inspirational to expand my knowledge and
            enhance my skills for continuous personal and professional growth.
          </span>
        </div>
        <button className="button i-button">
            Hire Me
        </button>
        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div className="floating-div-1">
            <FloatingDiv image={crown} txt1={"Web"} txt2={"Developer"}/>
        </div>
        <div className="floating-div-2">
            <FloatingDiv image={thumbup} txt1={"Best Design"} txt2={"Award"}/>
        </div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left:"-9rem",
        }}></div>
      </div>
    </div>
  );
}

export default Intro;
