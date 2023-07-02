import { Document } from "./icons"

const Navbar = () => {
  return (
    <header className="hidden md:flex py-5 items-center justify-between px-[10%] absolute top-0   w-full">
        {/* Logo and Name  */}
        <div className="w-40 ">
            <img src="title.png" alt=""/>
        </div>


        {/* Document */}
        <button className=" flex space-x-2 text-white font-bold uppercase" >  <Document/> <p>HR Form</p></button>

    </header>
  )
}

export default Navbar