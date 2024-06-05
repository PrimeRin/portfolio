import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} className="wave-img" />
      <div className="f-content">
        <span>primedruk312@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/PrimeRin">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://medium.com/@primedruk312">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://www.instagram.com/walther.alanxander/">
            <Insta color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
