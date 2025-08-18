import Hero from "../components/Hero";
import MarqueeEffect from "../components/MarqueeEffect";
import IntroSection from "../components/IntroSection";
import Testimonial from "../components/Testimonial";
import CategoryShowcase from "../components/CategoryShowcase";

const Home = () => {
  return (
    <section>
      <Hero />
      <MarqueeEffect />
      <IntroSection />
      <div className="w-full h-[.4em] bg-gray-100"></div>
      <Testimonial />
      <CategoryShowcase />
      <div className="h-[100vh] w-full"></div>
    </section>
  );
};

export default Home;
