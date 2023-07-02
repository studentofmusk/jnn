import Buttonb from "./Buttonb"
import { Analysis, Group, School } from "./icons"

const BoxTxt = ({title="", description="", link=""} )=>{
  return <div className="w-full h-[55%] flex flex-col md:justify-between">
          <div >
            <div className="mb-3 text-[#164b60] text-center text-2xl md:text-3xl font-semibold">{title}</div>
            <div className="mb-4 text-sm md:text-lg text-center font-semibold">{description}</div>
          </div>
          <center><Buttonb text="Apply" path={link} hoverTextColor="hover:text-white" backgound="bg-[#164b60]" border="border-[#164b60]" textColor="text-[#164b60]" className="px-12 py-1 "/></center>
  </div>
            
            
}



const Slide1 = () => {
  return (
    <section id="slide1" className="py-10 md:py-16">
        <div className="flex flex-col justify-center items-center h-36">
            <h1 className="text-3xl md:text-5xl font-semibold text-[#001c30] mb-3 md:mb-5">Discover Your Worth</h1>
            <p className="text-[#1b6b93] text-sm w-10/12 mx-auto text-center md:text-lg font-semibold">Explore Existing Job Openings That Match your Expertise And Ignite Your Passion</p>
        </div>
        <div className="flex md:justify-evenly items-center space-y-5 md:flex-row flex-col flex-wrap mt-10 mx-auto">

            {/* box 1 */}
            <div className="w-80 h-80 flex flex-col items-center">
                <School className="fill-[#001c30] w-24 h-24 mb-5" />
                <BoxTxt 
                  title='Teaching Faculty' 
                  description="Professor | Associate Professor Assistant Professor" 
                  link="/"
                />
                
            </div>

            {/* box 2 */}
            <div className="w-80 h-80 flex flex-col items-center">
                <Analysis className="fill-[#001c30] w-24 h-24 mb-5" />
                <BoxTxt 
                  title='INDUSTRY 4.0 Exports' 
                  description="For Technical Training" 
                  link="/"
                />
                
            </div>

            {/* box 3 */}
            <div className="w-80 h-80 flex flex-col items-center">
                <Group className="fill-[#001c30] w-24 h-24 mb-5" />
                <BoxTxt 
                  title='Teaching Associates' 
                  description="Academic | Non Academic" 
                  link="/"
                />
                
            </div>
            
            
        </div>
    </section>
  )
}

export default Slide1