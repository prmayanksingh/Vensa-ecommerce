import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LuShoppingCart } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.userReducer);

  return (
    <nav className="h-[3.2rem] bg-gray-200 px-4 sm:px-7 xl:px-17 flex items-center justify-between text-[clamp(10px,4vw,16px)] sm:text-[17px]">
      <Link to={"/"} className="font-[monument] text-[1.7em] font-bold">
        vensa.co
      </Link>
      <div className="text-[1em] text-[#515151] font-semibold flex gap-5 sm:gap-7 xl:gap-10">
        {users?.isAdmin ? (
          <NavLink
            to={"/admin/create-product"}
            className="flex gap-1 items-center"
          >
            <FaPlus className="text-[1.2em]" />
            <span>Create Product</span>
          </NavLink>
        ) : (
          <NavLink to={"/cart"} className="flex gap-1 items-center">
            <LuShoppingCart className="text-[1.2em]" />
            <span>Cart</span>
          </NavLink>
        )}
        {users ? (
          <NavLink to={"/profile"} className="flex gap-1 items-center">
            <CgProfile className="text-[1.2em]" />
            <span>Profile</span>
          </NavLink>
        ) : (
          <NavLink to={"/auth"} className="flex gap-1 items-center">
            <IoMdLogIn className="text-[1.2em]" />
            <span>Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
