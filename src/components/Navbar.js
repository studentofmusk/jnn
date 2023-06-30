const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-[10%] bg-[#b00d0d] ">
        {/* Logo and Name  */}
        <div className="w-40 ">
            <img src="title.png" alt=""/>
        </div>

        {/* Navbar */}
        <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Browse Job</li>
            
        </ul>

        {/* Document */}
        <button>HR Form</button>

    </header>
  )
}

export default Navbar