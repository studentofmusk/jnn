

const Herobar = () => {
  return (
    <div className="w-full bg-[#2b8384] max-h-[180vh] lg:h-[98vh]">
      <div className="flex justify-between h-full w-full lg:flex-row flex-col bg-[#2b8384]">
        <div className="h-3/6 lg:h-full w-full lg:w-3/6 flex flex-col justify-center space-y-12 ">
          <img src="jnn name.png" alt="JNN INSTITUE" className="" />
          <div className="ml-10 lg:ml-20">
            <div className="text-[17px] md:text-xl text-white capitalize ">transforming education and empowering minds:</div>
            <div className="text-2xl text-white font-bold capitalize my-5">Join our college's dedicated team of educators and Tech Trainers today!</div>
            <button className="border-2 border-white py-2 px-14 rounded-[3px] uppercase text-white text-xl mt-3 ml-2">Apply</button>
          </div>
          
        </div>
        <img className="lg:h-full lg:w-auto  w-full" src="hero img.jpg" alt="" />
       
      </div>
    </div>
  )
}

export default Herobar