import React from 'react'
import "./Hero.css"
import { FaRegHand } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { SiApacherocketmq } from "react-icons/si";


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <FaRegHand className='handimg' />
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
        <SiApacherocketmq />
        </div>

    </div>
  )
}

export default Hero