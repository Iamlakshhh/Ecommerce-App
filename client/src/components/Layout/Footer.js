import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>     
    {/* here p-3 means padding = 3 */}
      <h4 className='text-center'>All Right Reserved &copy; Laksh&Co.</h4>
      <p className="text-center mt-3">
      <Link to="/about">About </Link>
      |
      <Link to="/Contact"> Contact </Link>
      |
      <Link to="/policy"> Policy </Link>
      </p>
      </div>
  )
}

export default Footer