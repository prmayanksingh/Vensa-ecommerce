import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
import { pexels } from "../utils/img";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="w-full sm:w-[20em] h-[30em] hover:shadow-2xl rounded"
    >
      <div className="w-full h-[75%]">
        <img
          className="h-full w-full object-cover rounded object-center"
          src={pexels(product.image)}
          alt={product.title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="h-[25%] py-5 px-3 font-semibold text-center flex flex-col gap-[0.2em]">
        <h1 className=" text-[1.1em] text-gray-600">
          {product.name.slice(0, 30)}...
        </h1>
        
        <h2 className="text-[1em] flex items-center self-center mt-[0.2em] -translate-x-[10%]">
          <MdCurrencyRupee className="text-[1.1em]" />{" "}
          <span>{product.price}</span>
        </h2>
      </div>
    </Link>
  );
};

export default ProductCard;
0