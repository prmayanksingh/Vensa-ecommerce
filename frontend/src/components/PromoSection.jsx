import promotionBanner from "../assets/promotionBanner.webp";

const PromoSection = () => {
  return (
    <section className="w-full h-[50em] sm:h-[55em] md:h-[35em] py-[.8em] bg-[#F7F7F7] text-[clamp(10px,3.7vw,17px)] md:text-[clamp(12px,2.3vw,19px)] xl:text-[clamp(14px,1.35vw,20px)]">
      <div className="h-full w-full md:flex md:flex-row-reverse md:justify-between bg-white">
        <div className="w-full md:w-[48%] h-[50%] md:h-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center scale-[117%]"
            src={promotionBanner}
            alt=""
          />
        </div>
        <div className="w-full md:w-[48%] h-[50%] md:h-full px-[1.2em] md:px-[0em] py-[2.2em] flex flex-col justify-between md:justify-center md:items-end md:gap-[4em]">
          <div className="flex flex-col md:items-end gap-[.8em] md:gap-[1em]">
            <h1 className="text-[2.1em] lg:text-[2.4em] w-[62%] md:w-[80%] lg:w-[7.5em] md:text-right font-bold leading-[1.3em]">
              Shop Now for Exclusive Styles!
            </h1>
            <h3 className="text-[1em] lg:text-[1em] sm:w-[80%] md:w-[88%] lg:w-[23em] md:text-right text-gray-600 leading-[1.2em]">
              Browse our latest collection of trendy fashion, smart gadgets, and
              stylish accessories designed for every occasion.
            </h3>
          </div>
          <button className="w-fit h-fit text-[1.1em] lg:text-[1em] px-[1em] lg:px-[1.2em] py-[.4em] lg:py-[.5em] shadow shadow-gray-400 rounded-lg ">
            Browse Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
