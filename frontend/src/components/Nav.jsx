import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="h-[3.2rem] px-4 sm:px-7 xl:px-17 flex items-center justify-between text-[4vw] sm:text-[17px]">
      <h1 className="font-[monument] text-[1.7em] font-bold">vensa.co</h1>
      <div className="text-[1em] text-[#515151] font-semibold flex gap-5 sm:gap-7 xl:gap-10">
        <Link to={"/cart"} className="flex gap-1 items-center">
          <LuShoppingCart className="text-[1.2em]" />
          <span>Cart</span>
        </Link>
        <Link to={"/auth"} className="flex gap-1 items-center">  
          <FaRegUserCircle className="text-[1.2em]" />
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
