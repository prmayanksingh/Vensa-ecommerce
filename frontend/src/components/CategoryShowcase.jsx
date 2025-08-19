import React from "react";

const CategoryShowcase = () => {
  return (
    <section className="bg-[#F7F7F7] py-[.5em] flex flex-nowrap gap-[.5em] overflow-x-auto lg:overflow-x-hidden scroll-smooth text-[clamp(10px,3.8vw,16px)] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[clamp(14px,1.2vw,24px)]">
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[120%]"
          src="https://images.pexels.com/photos/12225310/pexels-photo-12225310.jpeg"
          alt=""
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-[gilroy]">
            Women’s Trendy Styles
          </h1>
          <h2 className="text-center text-[.9em] font-[gilroy] leading-[1.3em] text-gray-200">
            Explore the latest fashion trends for women. From chic to casual,
            find styles for every occasion.
          </h2>
          
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover scale-[130%]"
          src="https://images.pexels.com/photos/9604303/pexels-photo-9604303.jpeg"
          alt=""
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-[gilroy]">
            Men’s Fashion Essentials
          </h1>
          <h2 className="text-center text-[.9em] font-[gilroy] leading-[1.3em] text-gray-200">
            Shop a curated collection of men’s styles, from timeless classics to
            modern fashion essentials.
          </h2>
          
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[110%]"
          src="https://images.pexels.com/photos/16768686/pexels-photo-16768686.jpeg"
          alt=""
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-[gilroy]">
            Accessories to Complete
          </h1>
          <h2 className="text-center text-[.9em] font-[gilroy] leading-[1.3em] text-gray-200">
            Find stylish accessories to elevate any outfit, from chic bags to
            jewelry adding the perfect finishing touch.
          </h2>
        
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[110%]"
          src="https://images.pexels.com/photos/28570315/pexels-photo-28570315.jpeg"
          alt=""
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-[gilroy]">
            Everyday Tech Essentials
          </h1>
          <h2 className="text-center text-[.9em] font-[gilroy] leading-[1.3em] text-gray-200">
            Discover modern gadgets and smart devices that simplify life while
            keeping you connected effortlessly daily.
          </h2>
          
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[100%]"
          src="https://images.pexels.com/photos/16485635/pexels-photo-16485635.jpeg"
          alt=""
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-[gilroy]">
            Stylish Backpacks
          </h1>
          <h2 className="text-center text-[.9em] font-[gilroy] leading-[1.3em] text-gray-200">
            From work to travel, discover durable backpacks blending comfort
            with stylish design for every occasion.
          </h2>
          
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
