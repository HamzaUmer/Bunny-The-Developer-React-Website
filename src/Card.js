import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration:2000 });
 }, [])
  return(
    <>
            <div className="col-md-4 col-10 mx-auto">
            <div data-aos="slide-right" data-aos-duration='2000' className="card">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <NavLink to="#" className="btn btn-service">Explore</NavLink>
            </div>
          </div>
            </div>
    </>
  );
};

export default Card;