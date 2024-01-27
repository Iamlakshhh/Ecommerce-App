import React from 'react';
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About Us-GZ"} keywords={"about, about us"} description={"this is our about page"} author={"Lakshya Sharma"}>
    <div className="row contactus">
      <div className="col-md-6">
        <img src="/images/about.jpeg" alt="Contact Us" style={{width:"100%"}}/>
      </div>
      <div className="col-md-6">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
        <h2>Welcome to Gen-z!</h2>
        <p className="text-justify mt-2">
        ◾ We aim to offer our customers a variety of the latest Collections. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.<br/>
        ◾ We always keep an eye on the latest trends in Clothing and put our customer's wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the Clothing industry.<br/>
        ◾ The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default About;