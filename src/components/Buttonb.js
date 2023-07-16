"use client"
import React from "react";
import Link from "next/link";



const Buttonb = ({className="", path="/", text="", textSize="", textColor="", hoverTextColor="", border="", backgound=""}) => {
  


  return (
    <Link href={path}>
    <button 
    id="btn"
    className={`${hoverTextColor?hoverTextColor:"hover:text-black"} border-2 ${border?border:"border-black"} py-2 px-14 rounded-[3px] uppercase ${textColor?textColor:"text-black"} text-xl mt-3 ml-2 ${className} relative` }
    >
      <div 
       className={`z-10 absolute inset-0 w-0 ${backgound?backgound:"bg-white"}`} 
       
       />

      <div className={`relative z-20 ${textSize}`}>{text?text:"Text"}</div>
       
    </button>
    </Link> 
  )
}

export default Buttonb