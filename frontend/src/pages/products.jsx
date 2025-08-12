import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Suspense, useEffect, useState } from "react";
import axios from "../api/axiosconfig";

const Products = () => {
  // const { products } = useSelector((state) => state.productReducer);
  const [products, setproducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchMoreProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=8&_start=${products.length}`
      );
      if (data.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
        setproducts([...products, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoreProducts();
  }, []);

  return (
    <section>
      <Nav />
      <div className="flex py-[1.2em] px-[1.5em] md:px-[1.5em]">
        <div className="w-[10%]  flex items-center justify-center">
          <Link
            to={-1}
            className="text-[1.1em] px-[1.2em] py-[.25em] rounded text-white bg-gray-500"
          >
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
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={<h4 className="text-[1.3em] text-center my-10">Loading...</h4>}
        endMessage={
          <p className="text-[1.3em] text-center my-10">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="xl:max-w-[90.6rem] mx-auto px-11 pt-7 pb-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start gap-[1em] sm:gap-[1.2em] lg:gap-[1.7em]">
          <Suspense fallback={<h4 className="text-[1.3em] text-center my-10">Loading...</h4>} >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Suspense>
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default Products;
