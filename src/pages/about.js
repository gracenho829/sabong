
import React from "react";
import '../css/about.css';
import logo from '../resources/sabongLogo.png';

const About = () => {
  return (
    <div className = "body">
      <img src={logo} className="sabonglogo" alt="logo"></img>
      <div className="vl"></div>
      <div className = "bandIntro">
          <p>밴드에 대한 자기소개밴드에 대한 자기소개밴드에 대한 자기소개 <br/>
          밴드에 대한 자기소개밴드에 대한 자기소개밴드에 대한 자기소개<br/>
          밴드에 대한 자기소개밴드에 대한 자기소개밴드에 대한 자기소개밴드에 대한 자기소개<br/>
          밴드에 대한 자기소개밴드에 대한 자기소개밴드에 대한 자기소개<br/>
          밴드에 대한 자기소개밴드에 대한 자기소개</p>
      </div>
      <div className="vl" style={{height:"40vh"}}></div>
    </div>
  );
};
  
export default About;