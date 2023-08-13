import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>


      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Vattikuti Charan Tej, Java 
            Developer from Hyderabad, Telangana. I have rich experience in web site design and
            building and customization, also I am good at Wordpress.</p>
            <a href="#resume" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About