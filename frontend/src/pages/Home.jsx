import Hero from "../components/Hero";
import MarqueeEffect from "../components/MarqueeEffect";
import IntroSection from "../components/IntroSection";
import Testimonial from "../components/Testimonial";
import CategoryShowcase from "../components/CategoryShowcase";
import FAQSection from "../components/FAQSection";
import PromoSection from "../components/PromoSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
      <Hero />
      <MarqueeEffect />
      <IntroSection />
      <div className="w-full h-[.4em] bg-gray-100"></div>
      <Testimonial />
      <CategoryShowcase />
      <FAQSection />
      <PromoSection />
      <Footer />
    </section>
  );
};

export default Home;
