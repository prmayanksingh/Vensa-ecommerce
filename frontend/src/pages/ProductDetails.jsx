import Nav from "../components/Nav";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteProduct } from "../store/actions/ProductAction";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const { products } = useSelector((state) => state.productReducer);
  const { users } = useSelector((state) => state.userReducer);
  const product = products?.find((product) => product.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementHandler = () => {
    setquantity(quantity + 1);
  };

  const decrementHandler = () => {
    if (quantity > 1) setquantity(quantity - 1);
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };

  return (
    <div className="">
      <Nav />
      {products ? (
        <div className="lg:min-h-[calc(100vh-3.2rem)] flex flex-col lg:flex-row lg:justify-center p-[2em] sm:p-[3em] md:p-[3.5em] lg:px-[6em] lg:p-[2.2em] pt-[2.6em] sm:pt-[2.5em] md:pt-[2.8em] text-[3.7vw] sm:text-[2.2vw] md:text-[1.9vw] lg:text-[16px] gap-[0.7em] lg:gap-[4em]">
          <div className="rounded sm:h-[40em] md:h-[46em] lg:h-[38vw] lg:w-[40%]">
            <img
              className="h-full w-full object-cover object-center rounded"
              src={product?.image}
              alt=""
            />
          </div>
          <div className="lg:w-[50%] p-2 flex flex-col gap-[.4em] lg:gap-[.4em]">
            <h1 className="text-[1.3em] md:text-[1.5em] lg:text-[2.2em] font-bold">
              {product?.name}
            </h1>
            <div className="w-full flex lg:flex-col-reverse justify-between lg:gap-[.4em]">
              <h2 className="text-[1.1em]">{product?.category}</h2>
              <h3 className="text-[1.2em] ml-[-.3em]">⭐⭐⭐⭐⭐</h3>
            </div>
            <h2 className="self-start flex items-center text-[1em] lg:text-[1.4em] ml-[-.2em]">
              <MdCurrencyRupee />
              {product?.price}
            </h2>
            <div className="self-start w-fit px-2 py-1 my-[0.3em] lg:my-[0.6em] text-[1em] rounded flex items-center gap-[0.5em] outline">
              <FiMinus
                className="active:scale-[85%]"
                onClick={decrementHandler}
              />
              <input
                readOnly
                value={quantity}
                className="w-[2em] text-center"
                type="text"
              />
              <FaPlus
                className="active:scale-[85%]"
                onClick={incrementHandler}
              />
            </div>
            {users?.isAdmin ? (
              <div className="flex flex-col sm:flex-row items-center gap-[1.1em] mt-[.4em]">
                <Link
                  to={`/admin/update-product/${product?.id}`}
                  className="h-[3em] w-[21.9em] flex items-center justify-center rounded outline active:scale-[98%]"
                >
                  Update
                </Link>
                <button
                  onClick={deleteHandler}
                  className="h-[3em] w-[21.9em] rounded bg-black text-white active:scale-[98%]"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-[1.1em] mt-[.4em]">
                <Link className="h-[3em] w-[21.9em] flex items-center justify-center rounded outline active:scale-[98%]">
                  Add to cart
                </Link>
                <button className="h-[3em] w-[21.9em] rounded bg-black text-white active:scale-[98%]">
                  Buy Now
                </button>
              </div>
            )}

            <div className="flex flex-col gap-[0.2em] lg:gap-[0.3em] mt-[1.2em] lg:mt-[1.5em]">
              <h2 className="text-[1.2em] lg:text-[1.4em] font-bold">
                Discription
              </h2>
              <h3 className="text-[1em] lg:text-[1.1em] lg:leading-[1.3em]">
                {product?.description}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-[1.5em] my-[2em]">Loading...</h1>
      )}
    </div>
  );
};

export default ProductDetails;
