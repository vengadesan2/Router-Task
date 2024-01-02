import React from 'react'
import { Link } from 'react-router-dom'
function TopBar() {
  return <>
<div className="d-flex justify-content-center md-6 ">
  <ul className="nav nav-underline" >
    <li className="nav-item">
      <Link to='/All' className="nav-link" href="#">ALL</Link>
    </li>
    <li className="nav-item">
      <Link  to='/FullStack' className="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
    </li>
    <li className="nav-item">
      <Link  to='/DataScience' className="nav-link" href="#">DATA SCIENCE</Link>
    </li>
    <li className="nav-item">
      <Link  to ='/CyberSecurity' className="nav-link" href='#'>CYBER SECURITY</Link>
    </li>
    <li className="nav-item">
      <Link to ="/Careyer" className="nav-link" href='#'>CAREER</Link>
    </li>
  </ul>
</div>
  </>
}

export default TopBar