import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUserDelete } from "react-icons/ai";
import { asyncLogoutUser } from "../store/actions/UserAction";
import { FaPlus } from "react-icons/fa";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.userReducer);

  const logOutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };

  return (
    <nav className="h-[3.2rem] bg-gray-200 px-4 sm:px-7 xl:px-17 flex items-center justify-between text-[4vw] sm:text-[17px]">
      <Link to={"/"} className="font-[monument] text-[1.7em] font-bold">vensa.co</Link>
      <div className="text-[1em] text-[#515151] font-semibold flex gap-5 sm:gap-7 xl:gap-10">
        {/* <NavLink to={"/cart"} className="flex gap-1 items-center">
          <LuShoppingCart className="text-[1.2em]" />
          <span>Cart</span>
        </NavLink> */}
        {users?.isAdmin ? (
          <NavLink to={"/createproduct"} className="flex gap-1 items-center">
            <FaPlus className="text-[1.2em]" />
            <span>Create Product</span>
          </NavLink>
        ) : (
          ""
        )}
        {users ? (
          <button onClick={logOutHandler} className="flex gap-1 items-center">
            <AiOutlineUserDelete className="text-[1.2em]" />
            <span>LogOut</span>
          </button>
        ) : (
          <NavLink to={"/auth"} className="flex gap-1 items-center">
            <FaRegUserCircle className="text-[1.2em]" />
            <span>Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
