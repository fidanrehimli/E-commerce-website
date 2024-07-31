import React from 'react'
import "./Footer.css"
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPinterest } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
            <AiFillInstagram /> 
            </div>
            <div className="footer-icons-container">
            <AiFillPinterest />
            </div>
            <div className="footer-icons-container">
            <IoLogoWhatsapp />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Cpyright @ 2023 -All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer