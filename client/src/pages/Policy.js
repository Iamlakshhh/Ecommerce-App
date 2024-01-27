import React from 'react';
import Layout from './../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy-GZ"} keywords={"policy, privacy"} description={"this is our policy page"} author={"Lakshya Sharma"}>
    <div className="row contactus">
      <div className="col-md-6">
        <img src="/images/policy.jpg" alt="Contact Us" style={{width:"100%"}}/>
      </div>
      <div className="col-md-6">
        <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
        <p className="text-justify mt-2">
        ◾ This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from (www.genz-ecommerce.com).<br/>
        <b>WHAT PERSONAL INFORMATION WE COLLECT</b><br/>
        ◾ When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.<br/>
        ◾ Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically collected information as <b>Device Information.</b><br/>
        ◾ We collect Device Information using the following technologies:<br/>
        ➡️ Cookies are data files that are placed on your device or computer and often include an anonymous unique identifier.<br/>
        ➡️ Log files track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.<br/>
        ◾ <i>Mention all other tracking tools and/or technologies being used by your website.</i><br/>
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default Policy;