import React from 'react';
import Layout from './../components/Layout/Layout';
import {BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout className="Contact" title={"Contact Us-GZ"} keywords={"contact, mail, email, call, customer care, tollfree"} description={"this is our contact page"} author={"Lakshya Sharma"}>
    <div className="row contactus">
      <div className="col-md-6">
        <img src="/images/contactus.jpeg" alt="Contact Us" style={{width:"100%"}}/>
      </div>
      <div className="col-md-6">
        <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
        <p className="text-justify mt-2">
          Any query and info about product feel free to call anytime. we are 24X7 available for you.
        </p>
        <p className="mt-3">
          <BiMailSend/> : customer_help@ecommerce.com
        </p>
        <p className="mt-3">
          <BiPhoneCall/> : +91 63989-XXXXX
        </p>
        <p className="mt-3">
          <BiSupport/> : 1800-8888-9999 (toll free)
        </p>
      </div>
    </div>
    </Layout>
  );
}; 

export default Contact;