"use client"
import React from "react";
import Link from "next/link";
import {motion, useAnimation} from "framer-motion";

const Buttonb = ({className="", path="/", text="", textColor="", hoverTextColor="", border="", backgound=""}) => {
  const containerAnimation = useAnimation();

  const handleHover = async () => {
    // Wait for 500ms before increasing the width
    await containerAnimation.start({ width: '100%' });
  };

  const handleHoverEnd = () => {
    containerAnimation.start({ width: '0%' });
  };

  return (
    <Link href={path}>
    <motion.button 
    whileTap={{scale:0.9}} 
    onMouseEnter={handleHover} 
    onMouseLeave={handleHoverEnd}
    onClick={handleHover} 
    className={`${hoverTextColor?hoverTextColor:"hover:text-black"} border-2 ${border?border:"border-black"} py-2 px-14 rounded-[3px] uppercase ${textColor?textColor:"text-black"} text-xl mt-3 ml-2 ${className} relative` }
    >
      <motion.div 
       className={`z-10 absolute inset-0 w-0 ${backgound?backgound:"bg-white"}`} 
       animate={containerAnimation} 
       transition={{ duration: 0.5 }}
       />

      <div className="relative z-20">{text?text:"Text"}</div>
       
    </motion.button>
    </Link> 
  )
}

export default Buttonb