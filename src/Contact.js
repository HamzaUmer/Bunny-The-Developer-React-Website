import React, { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration:2000 });
 }, [])
  const [data, setData] = useState ({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
        return {
          ...preVal,
          [name] : value,
        };
    });
  };

  const formSubmit =  (e) => {
     e.preventDefault();
     alert(`Full Name: ${data.fullname}. Phone Number: ${data.phone}. Email Address: ${data.email}. Message: ${data.msg}` );
  };
  return(
    <>
    <div className="my-5">
      <h1 className="text-center"> Contact Bunny</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div data-aos="slide-left" data-aos-duration='2000' class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Full Name" />
          </div>
          <div data-aos="slide-left" data-aos-duration='2000' class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent}  placeholder="Enter Your Phone Number" />
          </div>
          <div data-aos="slide-left" data-aos-duration='2000' class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email Address" />
          </div>
          <div data-aos="slide-left" data-aos-duration='2000' class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} placeholder="Type Your Message" ></textarea>
          </div>
          <div data-aos="slide-up" data-aos-duration='2000' class="col-12" className="Form-btn">
          <button class="btn btn-form" type="submit">Send Message</button>
        </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;