import Buttonb from "@/components/Buttonb";


export const metadata = {
    title: 'JNN | Teaching Faculty',
    description: 'Teaching job apply at jnn institute',
  }
  

const Box =({link="/", title="Undefined", description="undefined", imgsrc="", imgcls="" })=>(
    <div className="w-80 h-72 flex flex-col justify-between items-center my-10">
                    <img src={imgsrc} alt={title} className={`w-32 h-32 ${imgcls}`} srcset="" />
                    <h4 className="font-bold text-[#176B87]">{title}</h4>
                    <div className="text-center text-[#001c3091]">{description}</div>
                    <Buttonb text="Apply" path={link} textSize="text-base" hoverTextColor="hover:text-white" backgound="bg-[#164b60]" border="border-[#164b60]" textColor="text-[#164b60]" className="px-8 py-1 " />
                </div>
)



export default function TeachingFaculty(){
    return (
        <section className="w-full my-10">
            
            {/* Headings  */}
            <h3 className="px-5 text-[#176B87] text-center md:text-base text-xs font-semibold capitalize mt-12 mb-3" >We are constantly seeking individuals who can contribute fresh perspectives and life experiences to our team.</h3>
            <h2 className="px-5 text-[#001c307e] text-center text-base md:text-lg font-semibold capitalize" >We are dedicated to our mission of fostering lifelong learning.</h2>
            <div className="mx-auto my-10 w-10/12 flex flex-wrap justify-center md:justify-between ">
                <Box link='/' title="SCOFT" description="Professor | Associate Professor | Assistant Professor" imgsrc="1.png"  />
                <Box link='/' title="Agriculture" description="Professor | Associate Professor | Assistant Professor" imgsrc="2.png"  />
                <Box link='/' title="Bio Medical" description="Professor | Associate Professor | Assistant Professor" imgsrc="3.png"  />
                <Box link='/' title="Civil" description="Professor | Associate Professor | Assistant Professor" imgsrc="4.png"  />
                <Box link='/' title="Chemical" description="Professor | Associate Professor | Assistant Professor" imgsrc="5.png"  />
                <Box link='/' title="ECE" description="Professor | Associate Professor | Assistant Professor" imgsrc="6.png"  />
                <Box link='/' title="EEE" description="Professor | Associate Professor | Assistant Professor" imgsrc="7.png"  />
                <Box link='/' title="EIE" description="Professor | Associate Professor | Assistant Professor" imgsrc="8.png"  />
                <Box link='/' title="Mechanical" description="Professor | Associate Professor | Assistant Professor" imgsrc="9.png"  />
                <Box link='/' title="Medical Electronics" description="Professor | Associate Professor | Assistant Professor" imgsrc="10.png"  />
                <Box link='/' title="S&H" description="Professor | Associate Professor | Assistant Professor" imgsrc="11.png"  />
                <Box link='/' title="MBA" description="Professor | Associate Professor | Assistant Professor" imgsrc="12.png"  />
                <Box link='/' title="Foreign Languages" description="Professor | Associate Professor | Assistant Professor" imgsrc="13.png"  />

            </div>
        </section>
    )
}