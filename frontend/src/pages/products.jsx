import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
const Products = () => {
  return (
    <section>
      <Nav />
      <h1 className="pt-5 text-[1.4em] sm:text-[1.7em] font-bold text-center uppercase">Our Products</h1>
      <div className="px-11 pt-7 pb-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.7em]">
        <ProductCard />
      </div>
    </section>
  );
};

export default Products;
