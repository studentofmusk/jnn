"use client"

import React from "react";
export default function Dashboard(){
  // let button = document.getElementById('btn');
  // let layer = document.getElementById('lay')

  const handleHoverIn = (e)=>{
    document.getElementById('lay').classList.add("w-full")
  }
  const handleHoverOut = (e)=>{
    document.getElementById('lay').classList.remove("w-full")
  }
  return (
    <>
    <button id="btn" onClick={()=>{document.getElementById('btn').classList.add("push")}} onMouseOver={handleHoverIn} onMouseOut={handleHoverOut} className="relative border-2 border-black  rounded-sm uppercase px-2 py-1 hover:text-white">
      Apply
      <div id='lay' className="absolute w-0 transform-w  duration-150 -z-10 top-0 left-0 h-full bg-black "></div>
    </button>
    </>
  )
}