import { School } from "./icons"

const Slide1 = () => {
  return (
    <section className="py-16">
        <div className="flex flex-col justify-center items-center h-36">
            <h1 className="text-5xl font-semibold text-[#001c30] mb-5">Discover Your Worth</h1>
            <p className="text-[#1b6b93] text-xl font-semibold">Explore Existing Job Openings That Match your Expertise And Ignite Your Passion</p>
        </div>
        <div className="flex justify-evenly">
            <div className="w-80 h-80 bg-red-200">
                <School className="fill-[#001c30] w-10 h-40"/>
            </div>
        </div>
    </section>
  )
}

export default Slide1