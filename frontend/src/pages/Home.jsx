import Hero from "../components/Hero";
import MarqueeEffect from "../components/MarqueeEffect";
import IntroSection from "../components/IntroSection";
import Testimonial from "../components/Testimonial";
import CategoryShowcase from "../components/CategoryShowcase";
import FAQSection from "../components/FAQSection";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <section>
      <Nav />
      <Hero />
      <MarqueeEffect />
      <IntroSection />
      <div className="w-full h-[.4em] bg-gray-100"></div>
      <Testimonial />
      <CategoryShowcase />
      <FAQSection />
    </section>
  );
};

export default Home;
