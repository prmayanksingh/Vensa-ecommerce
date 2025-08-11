import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Products = () => {
  const { products } = useSelector((state) => state.productReducer);

  return (
    <section>
      <Nav />
      <div className="flex py-[1.2em] px-[1.5em] md:px-[1.5em]">
        <div className="w-[10%]  flex items-center justify-center">
          <Link to={-1} className="text-[1.1em] px-[1.2em] py-[.25em] rounded text-white bg-gray-500">
            <FaArrowLeftLong />
          </Link>
        </div>
        <div className="w-[80%]  flex justify-center">
          <h1 className="text-[1.4em] sm:text-[1.7em] font-bold uppercase">
            Our Products
          </h1>
        </div>
        <div className="w-[10%] "></div>
      </div>
      {products ? (
        <div className="w-fit px-11 pt-7 pb-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.7em]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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
