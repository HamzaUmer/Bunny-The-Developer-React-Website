import React from "react";
import img1 from './assets/images/bunny-homepage.png';
import Common from './Common';

const Home = () => {
  return(
    <>
    <Common name= "Learn Web Development with " imgsrc={img1} visit="/service" btnname="Get Started" />
    </>
  );
};

export default Home;