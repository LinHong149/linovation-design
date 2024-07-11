import React from 'react'
import { Link as ScrollLink, Element } from "react-scroll";

const button = ({text}) => {
  return (
    <button className="btn w-fit bg-base-100 text-white hover:bg-[#161a1f]"><ScrollLink to="footer" smooth={true} duration={500}>{text}</ScrollLink></button>
  )
}

export default button