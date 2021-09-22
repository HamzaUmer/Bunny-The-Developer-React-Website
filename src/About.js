import React from "react";
import img1 from './assets/images/bunny-About.png';
import Common from './Common';
const About = () => {
  return(
    <>
    <Common name= "Welcome to About Page of " imgsrc={img1} visit="/contact" btnname="Contact Now" />
    </>
  );
};

export default About;