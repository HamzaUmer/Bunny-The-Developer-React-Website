import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Common = (props) => {
  useEffect(() => {
    Aos.init({ duration:2000 });
 }, [])
  return(
    <>
        <section id = "header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1 data-aos="fade-up" data-aos-duration='2000'>{props.name} <strong className="brand-name"> BunnyTheDeveloper </strong></h1>
            <h2 className="my-3" data-aos="fade-up" data-aos-duration='2000'>
              Bunny is a talented developer making websites
            </h2>
            <div className="mt-3">
              <NavLink to={props.visit} className="btn-get-started" data-aos="slide-up" data-aos-duration='2000'>
                {props.btnname}
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
          </div>
          </div>
    </div>
      </div>
        </div>
    </section>
    </>
  );
};

export default Common;