import React from 'react'
import "./Hero.css"
import hand from "../Assets/hand.png"
import { FaArrowRight } from "react-icons/fa";
import girl from "../Assets/girl.jpg"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
        <FaArrowRight />
            </div>
        </div>
        <div className="hero-right">
        <img src={girl} alt="" />
        </div>

    </div>
  )
}

export default Hero