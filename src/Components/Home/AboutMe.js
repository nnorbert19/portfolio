import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../styles/aboutme.css";
import AboutMeComponent from "../About/AboutMeComponent";
import MyHobbies from "../About/MyHobbiesComponent";
import MySkills from "../About/MySkillsComponent";

function AboutMe() {
  return (
    <div className="container center my-5 about" id="about">
      <div className="center tabs w-100">
        <Tabs defaultActiveKey="aboutme" id="tabs" className="w-100" fill>
          <Tab eventKey="aboutme" title="About me" className="m-4">
            <AboutMeComponent />
          </Tab>
          <Tab eventKey="myskills" title="My skills" className="m-4">
            <MySkills />
          </Tab>
          <Tab eventKey="myhobbies" title="My hobbies" className="m-4">
            <MyHobbies />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AboutMe;
