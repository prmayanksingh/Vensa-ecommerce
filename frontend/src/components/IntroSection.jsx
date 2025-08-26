import { MdVerified } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import introImage from "../assets/introImage.webp";

const IntroSection = () => {
  return (
    <section className="pb-[1em] lg:pb-[1.5em] sm:px-[2em] md:px-[2.5em] lg:px-[1em] xl:px-[2.5em] lg:py-[1em] text-[clamp(13px,3.75vw,16px)] sm:text-[2.4vw] md:text-[clamp(10px,2vw,17px)] lg:text-[17px] xl:text-[clamp(14px,1.1vw,18px)]">
      <div className="p-[1.6em] flex flex-col lg:flex-row gap-[1.5em] xl:gap-[1.8em]">
        <div className="lg:w-[50%]">
          <img className="h-full w-full object-cover rounded-xl" src={introImage} alt="" />
        </div>
        <div className="lg:w-[50%] p-[1.3em] md:p-[1.7em]  xl:text-[clamp(14px,1.2vw,20px)] rounded-xl bg-gray-100 flex flex-col lg:justify-between gap-[2.1em] md:gap-[5em]">
          <div className="flex flex-col gap-[1em] xl:gap-[clamp(14px,1.2vw,28px)]">
            <h1 className="text-[1.5em] sm:text-[1.4em] md:text-[1.6em] font-[gilroy] font-bold leading-[1.3em]">
              Discover Quality Fashion and Products for Every Lifestyle!
            </h1>
            <h3 className="text-[1em] sm:text-[.9em] leading-[1.3em] text-gray-500">
              Explore the latest trends and top products at Vensa.co, where
              style meets quality and variety. Our curated collection offers
              something for every occasion, ensuring you always find what you
              need.
            </h3>
            <h3 className="text-[1em] sm:text-[.9em] leading-[1.3em] text-gray-500">
              From everyday wear to unique finds, Vensa.co delivers high-quality
              items that reflect your taste. Shop now and enhance your lifestyle
              with trusted, timeless pieces.
            </h3>
          </div>
          <button className="w-fit px-[1.2em] py-[.4em] text-[1em] sm:text-[.9em] shadow shadow-gray-400 rounded-lg bg-white">
            Explore the collection
          </button>
        </div>
      </div>
      <div className="px-[1.6em] py-[1em] xl:py-[1.2em] flex flex-col lg:flex-row items-center justify-center gap-[1em]">
        <div className="p-[1.5em] xl:p-[3em] rounded-4xl flex flex-col items-center gap-[1.2em]">
          <MdVerified className="text-[1.7em]" />
          <div className="text-center flex flex-col gap-[.7em]">
            <h2 className="text-[1em] font-[gilroy] font-semibold">
              Seamless Shopping Experience
            </h2>
            <h2 className="text-[1em] font-[gilroy] leading-[1.3em] font-semibold text-gray-500">
              Fast, secure, and easy checkout for a smooth buying process, no
              matter what you shop for.
            </h2>
          </div>
        </div>

        <div className="h-[.2rem] lg:h-[5rem] w-[40%] sm:w-[25%] lg:w-[.4rem] text-center bg-gray-200"></div>

        <div className="p-[1.5em] xl:p-[2em] rounded-4xl flex flex-col items-center gap-[1.2em]">
          <MdDashboard className="text-[1.7em]" />
          <div className="text-center flex flex-col gap-[.7em]">
            <h2 className="text-[1em] font-[gilroy] font-semibold">
              Wide Range of Quality Products
            </h2>
            <h2 className="text-[1em] font-[gilroy] leading-[1.3em] font-semibold text-gray-500">
              From trendy clothing to everyday essentials, explore a diverse
              collection curated for style and durability.
            </h2>
          </div>
        </div>

        <div className="h-[.2rem] lg:h-[5rem] w-[40%] sm:w-[25%] lg:w-[.4rem] text-center bg-gray-200"></div>

        <div className="p-[1.5em] xl:p-[2em] rounded-4xl flex flex-col items-center gap-[1.2em]">
          <FaImages className="text-[1.7em]" />
          <div className="text-center flex flex-col gap-[.7em]">
            <h2 className="text-[1em] font-[gilroy] font-semibold">
              Clear & Detailed Product Images
            </h2>
            <h2 className="text-[1em] font-[gilroy] leading-[1.3em] font-semibold text-gray-500">
              High-resolution images that show exactly what you’re getting, so you can shop confidently.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
