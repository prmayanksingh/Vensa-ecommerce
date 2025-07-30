import { IoIosArrowForward } from "react-icons/io";
import hero from '../assets/hero.jpg'
import Nav from "./Nav";

const Hero = () => {
  return (
    <section>
      <Nav />
      <div className="relative z-1 w-full h-[83vh] xl:h-[calc(100vh-3.2rem)] text-[3.7vw] sm:text-[16px] flex items-end overflow-hidden">
      <img className="absolute object-no-repeat object-[30%] xl:object-[center_40%] -z-1 h-full w-full object-cover" src={hero} alt="" />
      <div className="text-white pl-4 pb-8 sm:pl-8 sm:pb-10 lg:pl-12 lg:pb-12 xl:pl-18 xl:pb-15">
        <h1 className="text-[3.94em] sm:text-[3.7em] lg:text-[4em] xl:text-[4.5em] 2xl:text-[5.6vw] font-bold font-[monument]">Vensa.co</h1>
        <p className="sm:w-[70%] text-[1.1em] font-semibold text-[#9f9f9f] -mt-2 sm:-mt-1 leading-[1.4em]">Vensa.co offers trendy, high-quality products at affordable prices perfect for every lifestyle and need.</p>
        <div className="flex mt-[1.8em] sm:mt-[2.2em] xl:mt-[2.6em] gap-6">
          <button className="px-[1.2em] py-[.4em] bg-white text-black text-[1.2em] font-semibold rounded-xl">Shop Now</button>
          <button className="text-[1.2em] flex gap-1 items-center">Learn More <IoIosArrowForward className="text-[1.2em]" /> </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
