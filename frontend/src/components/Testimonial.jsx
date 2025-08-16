import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <section className="px-[1.5em] sm:px-[4em] md:px-[7em] lg:px-[27vw] xl:px-[33vw] py-[3em] flex flex-col items-center gap-[1.55em] lg:gap-[1.7em] xl:gap-[2em] text-[3.7vw] sm:text-[2.7vw] md:text-[2vw] lg:text-[18px]">
      <h1 className="text-[2em] xl:text-[2.2em] font-bold tracking-wider mb-[-.4em]">
        Testimonial
      </h1>
      <h3 className="text-center text-[1em]  leading-[1.3em] mb-[.4em] text-gray-400">
        Customer testimonials showcasing real experiences, building trust and
        confidence in our products.
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-[3em] lg:gap-[4em]">
          <FaArrowLeft className="text-[2.3em] p-[.22em] bg-[#F8F8F8]  rounded-full border border-[#E4E4E4]" />
          <div className="w-[10em] lg:w-[12em] h-[10em] lg:h-[12em] rounded-full bg-gray-100">
            <img
              className="h-full w-full rounded-full object-center object-cover"
              src="https://images.pexels.com/photos/20321952/pexels-photo-20321952.jpeg"
              alt=""
            />
          </div>
          <FaArrowRight className="text-[2.3em] p-[.22em] bg-[#F8F8F8]  rounded-full border border-[#E4E4E4]" />
        </div>
      </div>
        <h1 className="text-[1.1em] flex text-[#00C500] gap-[.2em]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </h1>
      <h2 className="text-center text-[1.1em] text-gray-500 leading-[1.2em]">
        Vensa.co delivers premium quality fashion and essentials with a
        perfect mix of style and comfort. From trendy outfits to everyday
        must-haves, everything feels reliable and affordable. Truly my go-to
        destination for shopping!
      </h2>
      <h2 className="text-[1.2em] font-bold font-[gilroy] text-[#151515] tracking-wide">Ayush Singh</h2>
    </section>
  );
};

export default Testimonial;
