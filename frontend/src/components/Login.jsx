import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/UserAction";

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();

  const loginHandler = (user) => {
    dispatch(asyncLoginUser(user));

    reset();
  };

  return (
    <div className="lg:w-[50%] lg:flex lg:justify-center my-auto -translate-y-[8%] text-[4vw] md:text-[22px] lg:text-[20px] xl:text-[16px]">
      <div className="w-[22em]">
        <h1 className="text-center font-semibold text-[2.2em] mb-14">
          Sign In
        </h1>
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="flex flex-col gap-[1em]"
        >
          <div className="w-[22em] flex items-center gap-3 px-6 py-3 outline outline-gray-400 rounded-full">
            <span className="text-gray-700 text-xl">
              <CgMail />
            </span>
            <input
              {...register("email", { required: "Email is required" })}
              className="w-[17em] text-[1.1em] outline-none"
              type="email "
              placeholder="Email Id"
            />
          </div>

          <div className="w-[22em] flex items-center gap-3 px-6 py-3 outline outline-gray-400 rounded-full">
            <span className="text-gray-700 text-xl">
              <RiLockPasswordLine />
            </span>
            <input
              {...register("password", { required: "Password is required" })}
              className="w-[17em] text-[1.1em] outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <small className="text-[0.75em] text-right text-blue-700">
            Forgotten Password?
          </small>

          <button className="py-3 bg-blue-500 hover:bg-blue-700 text-[1.1em] text-white rounded-full">
            Sign in
          </button>
        </form>
        <div className="flex items-center my-6">
          <hr className="w-full text-gray-300" />
          <span className="px-2 text-[0.9em] font-[gilroy] text-gray-500 font-semibold">
            Or
          </span>
          <hr className="w-full text-gray-300" />
        </div>
        <h5 className="text-[0.8em] text-gray-700 text-center">
          New to Vensa.co?{" "}
          <span className="text-blue-700 font-bold">Register</span>
        </h5>
      </div>
    </div>
  );
};

export default Login;
