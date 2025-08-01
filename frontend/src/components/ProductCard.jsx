import { MdCurrencyRupee } from "react-icons/md";

const ProductCard = () => {
  return (
    <div className="w-full sm:w-[20em] h-[29em]">
      <div className="w-full h-[75%]">
        <img
          className="h-full w-full object-cover rounded object-center"
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
          alt=""
        />
      </div>
      <div className="h-[25%] py-4 px-3 font-semibold text-center flex flex-col gap-[0.2em]">
        <h1 className=" text-[1.1em] text-gray-600">
          Sony Lexion Ultra Camara
        </h1>
        <h2 className="text-[0.8em]">Camara</h2>
        <h2 className="text-[1em] flex items-center self-center mt-[0.2em]">
          <MdCurrencyRupee className="text-[1.1em]" /> <span>2000</span>
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
