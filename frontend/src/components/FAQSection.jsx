import { IoIosArrowDown } from "react-icons/io";

const FAQSection = () => {
  return (
    <section className="px-[1.6em] sm:px-[3em] md:px-[3.6em] lg:px-[2.6em] xl:px-[clamp(60px,5vw,100px)] py-[4em] flex flex-col gap-[3em] text-[clamp(10px,3.7vw,16px)] sm:text-[2.5vw] md:text-[2vw] lg:text-[clamp(10px,1.5vw,17px)] xl:text-[clamp(14px,1.2vw,19px)]">
      <div className="flex flex-col gap-[.4em]">
        <h1 className="text-[1.7em] lg:text-[2em] font-bold tracking-wide">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[1.3em]">
          <h3 className="lg:w-[30em] text-[1em] leading-[1.3em] text-gray-600">
            Find answers to common inquiries about products, shipping, returns
            and customer support
          </h3>
          <button className="w-fit h-fit text-[1.1em] lg:text-[1em] px-[1em] lg:px-[1.2em] py-[.4em] lg:py-[.5em]  shadow-[0px_1.5px_4px_rgba(0,0,0,0.25)] rounded-lg ">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[1.2em] lg:gap-[0em]">
        <div className="lg:w-[49%] flex flex-col gap-[1.2em] font-bold font-[gilroy] text-[#1F1F1F]">
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">01</h2>
              <h2 className="text-[.95em]">What size should I order for clothing?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">02</h2>
              <h2 className="text-[.95em]">How can I track my order status?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">03</h2>
              <h2 className="text-[.95em]">Do you offer international shipping options?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">04</h2>
              <h2 className="text-[.95em]">What is your return and exchange policy?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
        </div>
        <div className="lg:w-[49%] flex flex-col gap-[1.2em] font-bold font-[gilroy]">
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">05</h2>
              <h2 className="text-[.95em]">How can I cancel my order?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">06</h2>
              <h2 className="text-[.95em]">Are the products on sale final sale?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">07</h2>
              <h2 className="text-[.95em]">Do you offer gift cards for purchases?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
          <div className="w-full h-[3.5em] px-[1em] bg-[#F7F7F7] flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-[.8em]">
              <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">08</h2>
              <h2 className="text-[.95em]">How do I care for my garments?</h2>
            </div>
            <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
