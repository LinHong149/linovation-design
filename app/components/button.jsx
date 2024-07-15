import React from 'react'
import { Link as ScrollLink, Element } from "react-scroll";

const button = ({text}) => {
  return (
    <ScrollLink to="footer" smooth={true} duration={500}><button className="btn w-fit bg-[#1E232A] text-white hover:bg-[#161a1f] px-3 sm:py-2 sm:px-4 text-xs sm:text-md">{text}</button></ScrollLink>
  )
}

export default button