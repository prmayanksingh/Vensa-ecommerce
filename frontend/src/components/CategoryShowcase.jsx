import { pexels } from "../utils/img";

const CategoryShowcase = () => {
  const img1 =
    "https://images.pexels.com/photos/12225310/pexels-photo-12225310.jpeg";
  const img2 =
    "https://images.pexels.com/photos/9604303/pexels-photo-9604303.jpeg";
  const img3 =
    "https://images.pexels.com/photos/16768686/pexels-photo-16768686.jpeg";
  const img4 =
    "https://images.pexels.com/photos/28570315/pexels-photo-28570315.jpeg";
  const img5 =
    "https://images.pexels.com/photos/16485635/pexels-photo-16485635.jpeg";

  return (
    <section className="bg-[#F7F7F7] py-[.5em] flex flex-nowrap gap-[.5em] overflow-x-auto lg:overflow-x-hidden scroll-smooth text-[clamp(10px,3.8vw,16px)] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[clamp(14px,1.2vw,24px)]">
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[120%]"
          src={pexels(img1, 600, 800, 2)}
          srcSet={[
            `${pexels(img1, 400, 540, 2)} 400w`,
            `${pexels(img1, 500, 670, 2)} 500w`,
            `${pexels(img1, 600, 800, 2)} 600w`,
            `${pexels(img1, 750, 1000, 2)} 750w`,
          ].join(", ")}
          sizes="(min-width: 1024px) 29em, 24em"
          alt="Fashion model in black blazer dress and sunglasses, representing women’s trendy styles"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-['Gilroy']">
            Women’s Trendy Styles
          </h1>
          <h2 className="text-center text-[.9em] font-['Gilroy'] leading-[1.3em] text-gray-200">
            Explore the latest fashion trends for women. From chic to casual,
            find styles for every occasion.
          </h2>
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover scale-[130%]"
          src={pexels(img2, 600, 800, 2)}
          srcSet={[
            `${pexels(img2, 400, 540, 2)} 400w`,
            `${pexels(img2, 500, 670, 2)} 500w`,
            `${pexels(img2, 600, 800, 2)} 600w`,
            `${pexels(img2, 750, 1000, 2)} 750w`,
          ].join(", ")}
          sizes="(min-width: 1024px) 29em, 24em"
          alt="Male model in casual white t-shirt with olive jacket, representing men’s fashion essentials"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-['Gilroy']">
            Men’s Fashion Essentials
          </h1>
          <h2 className="text-center text-[.9em] font-['Gilroy'] leading-[1.3em] text-gray-200">
            Shop a curated collection of men’s styles, from timeless classics to
            modern fashion essentials.
          </h2>
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[110%]"
          src={pexels(img3, 600, 800, 2)}
          srcSet={[
            `${pexels(img3, 400, 540, 2)} 400w`,
            `${pexels(img3, 500, 670, 2)} 500w`,
            `${pexels(img3, 600, 800, 2)} 600w`,
            `${pexels(img3, 750, 1000, 2)} 750w`,
          ].join(", ")}
          sizes="(min-width: 1024px) 29em, 24em"
          alt="Woman in black top sitting on a stool, representing fashion accessories collection"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-['Gilroy']">
            Accessories to Complete
          </h1>
          <h2 className="text-center text-[.9em] font-['Gilroy'] leading-[1.3em] text-gray-200">
            Find stylish accessories to elevate any outfit, from chic bags to
            jewelry adding the perfect finishing touch.
          </h2>
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[110%]"
          src={pexels(img4, 600, 800, 2)}
          srcSet={[
            `${pexels(img4, 400, 540, 2)} 400w`,
            `${pexels(img4, 500, 670, 2)} 500w`,
            `${pexels(img4, 600, 800, 2)} 600w`,
            `${pexels(img4, 750, 1000, 2)} 750w`,
          ].join(", ")}
          sizes="(min-width: 1024px) 29em, 24em"
          alt="Young woman with glasses, headphones, and tablet, representing everyday tech essentials"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-['Gilroy']">
            Everyday Tech Essentials
          </h1>
          <h2 className="text-center text-[.9em] font-['Gilroy'] leading-[1.3em] text-gray-200">
            Discover modern gadgets and smart devices that simplify life while
            keeping you connected effortlessly daily.
          </h2>
        </div>
      </div>
      <div className="relative h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover object-center scale-[100%]"
          src={pexels(img5, 600, 800, 2)}
          srcSet={[
            `${pexels(img5, 400, 540, 2)} 400w`,
            `${pexels(img5, 500, 670, 2)} 500w`,
            `${pexels(img5, 600, 800, 2)} 600w`,
            `${pexels(img5, 750, 1000, 2)} 750w`,
          ].join(", ")}
          sizes="(min-width: 1024px) 29em, 24em"
          alt="Male model carrying a brown designer backpack, representing stylish backpacks collection"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute h-[60%] w-full py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
          <h1 className="text-[1.1em] tracking-wider font-bold font-['Gilroy']">
            Stylish Backpacks
          </h1>
          <h2 className="text-center text-[.9em] font-['Gilroy'] leading-[1.3em] text-gray-200">
            From work to travel, discover durable backpacks blending comfort
            with stylish design for every occasion.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
