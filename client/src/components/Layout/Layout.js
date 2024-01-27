import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast';
const Layout = ({children,title,description,keywords,author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
      </Helmet>
    <Header/>
    <main style={{minHeight:'79vh'}}> 
    <Toaster />
    {children}
    </main>
    <Footer/>
    </div>
  )
}

//if in some page we dont have any title or description then we set default values
Layout.defaultProps = {
  title: "Gen-Z Store",
  description: "Online Store(Mern Stack Project)",
  author: "Lakshya Sharma",
  keywords:"Shopping, clothing, mern, node, mongodb, reactjs"
}

export default Layout
