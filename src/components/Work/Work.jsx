import React from "react";
import "./Work.css";
import Upwork from "../../img/rails.png";
import Fiverr from "../../img/react.png";
import Amazon from "../../img/kuber.png";
import Shopify from "../../img/sql.png";
import Facebook from "../../img/express.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          With extensive experience in modern web technologies. 
          <br />
          Their expertise in Django and Express allows them to build robust
          back-end systems., 
          <br />
          Additionally, their proficiency with Ruby on Rails. 
          <br />
          Also well-versed in working with various
          databases, including SQL and NoSQL.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          whileInView={{ rotate: 0 }}
          initial={{ rotate: 45 }}
          transition={{ duration: 3.5, type: "spring" }}
          viewport={{ margin: "-40px" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
