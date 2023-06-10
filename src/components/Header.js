import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";
import "../css/header.css";
import logo from "../images/mylogo.png"


const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className='navbar bg-secondary-subtle'>
          <img src={logo} alt="logo" style={{width: "140px", height: "75px"}} />
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}> 
             <Link to="/"> <li>धाम का विवरण</li> </Link>
             <Link to="/events"> <li>यादगार पल</li> </Link>
             <Link to="/aarti"> <li>आरती व मंत्र</li> </Link>
             <Link to="/rules"> <li>नियम</li> </Link>
             <Link to="/reply"> <li>आपका अनुभव</li> </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
           {mobile ? <ImCancelCircle/> : <FaBars/>}
        </button>
      </nav>
    </>
  )
}

export default Header