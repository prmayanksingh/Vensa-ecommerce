import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
const Products = () => {
  const { products } = useSelector((state) => state.productReducer);

  return (
    <section>
      <Nav />
      <h1 className="pt-5 text-[1.4em] sm:text-[1.7em] font-bold text-center uppercase">
        Our Products
      </h1>

      {products ? (
        <div className="w-fit px-11 pt-7 pb-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.7em]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-[1.3em] text-gray-500 text-center mt-[1.5em]">
          Loading...
        </h1>
      )}
    </section>
  );
};

export default Products;
