import Hero from "../components/Hero";
import MarqueeEffect from "../components/MarqueeEffect";
import IntroSection from "../components/IntroSection";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <section>
      <Hero />
      <MarqueeEffect />
      <IntroSection />
      <div className="w-full h-[.4em] bg-gray-100"></div>
      <Testimonial />
    </section>
  );
};

export default Home;
