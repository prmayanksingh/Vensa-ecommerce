import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { FaArrowLeftLong } from "react-icons/fa6";
import Nav from "../../components/Nav";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteUser,
  asyncLogoutUser,
  asyncUpdateUser,
} from "../../store/actions/UserAction";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const { users } = useSelector((state) => state.userReducer);
  const [isEdit, setisEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (userdata) => {
    userdata.id = users.id;
    dispatch(asyncUpdateUser(users.id, userdata));
    toast.success("Profile Updated Successfully!!😁");
    setisEdit(!isEdit);
  };

  const logoutHandler = () => {
    if (confirm("Are you sure want to logout")) {
      dispatch(asyncLogoutUser());
      navigate("/");
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    setisEdit(!isEdit);
  };

  const deleteHandler = () => {
    if (confirm("Are you sure want to delete your account!!?")) {
      dispatch(asyncDeleteUser(users.id));
      navigate("/");
    }
  };

  useEffect(() => {
    if (users) {
      reset({
        username: users.username,
        name: users.name,
        email: users.email,
        password: users.password,
      });
    }
  }, [users, reset, isEdit]);

  return (
    <section className="text-[clamp(11px,3.7vw,15px)] sm:text-[clamp(13px,2.6vw,16px)] md:text-[clamp(13px,2vw,17px)] lg:text-[1.4vw] xl:text-[16px] bg-[#F5F6F8]">
      <div className="w-full h-[3.2em] flex justify-between items-center px-[1.6em] md:px-[3em] lg:px-[5.5em] pt-[.5em] lg:pt-[1.4em]">
        <Link
          to={-1}
          className="text-[1.2em] px-[1.1em] py-[.2em] rounded text-white bg-gray-500"
        >
          <FaArrowLeftLong />
        </Link>
        <button
          onClick={logoutHandler}
          className="w-fit h-[1.8em] flex items-center gap-1 bg-gray-500 text-[1em] text-white rounded px-[1em] py-[.2em]"
        >
          <BiLogOutCircle />
          Logout
        </button>
      </div>
      <div className="min-h-[calc(100vh-6.9rem)] lg:h-[calc(100vh-6.9rem)] p-4 px-[1.6em] md:px-[3em] lg:px-[3em] pt-[1.9em] md:pt-[5em] lg:py-[3em] xl:px-[9em] flex flex-col lg:flex-row lg:items-center gap-[3.5em] md:gap-[4em] xl:gap-[9em]">
        <div className="w-full lg:w-[45%] flex flex-col gap-[1.5em] lg:gap-[2em] xl:gap-[2.3em]">
          <h1 className="text-[3em] lg:text-[3.7em] xl:text-[4.3em] leading-[1.2em]">
            <span className="font-bold">Manage</span> &{" "}
            <span className="font-bold">Update</span> <br /> your Profile
          </h1>
          <h3 className="text-[1em] xl:text-[1.2em] leading-[1.2em] text-gray-500">
            View and edit your personal information to keep your account
            accurate and secure. Update your details anytime to enjoy a smooth
            and personalized experience.
          </h3>
        </div>
        <div className=" lg:w-[45%] xl:w-[40%] bg-white p-[1.7em] md:p-[2.5em] lg:p-9 lg:pt-7 xl:p-11 xl:pt-5 xl:pb-8 rounded-3xl shadow-2xl">
          <div className="w-full flex justify-center mb-[1em]">
            <div className="w-fit text-[2.2em] p-[.9em] bg-gray-400 rounded-full text-center">
              <HiOutlineUser className="text-gray-100" />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-[1.3em] md:gap-[1.5em] lg:gap-[1.5em] xl:gap-[1.5em]"
          >
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="username">
                Username
              </label>
              <input
                required
                readOnly={!isEdit}
                {...register("username", { required: "username is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="name">
                Name
              </label>
              <input
                required
                readOnly={!isEdit}
                {...register("name", { required: "name is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="email">
                Email
              </label>
              <input
                required
                readOnly={!isEdit}
                {...register("email", { required: "email is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="email"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="password">
                Password
              </label>
              <input
                required
                readOnly={!isEdit}
                {...register("password", { required: "password is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="password"
                type={isEdit ? "text" : "password"}
                placeholder="Enter your password"
              />
            </div>
            <div className="flex gap-[.9em] mt-[.2em]">
              {isEdit == true ? (
                <button
                  type="submit"
                  className="flex items-center justify-center w-[50%] text-[1.1em] outline text-black active:scale-[95%] py-[.4em] rounded-lg hover:bg-gray-100"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={editHandler}
                  type="button"
                  className="flex items-center justify-center w-[50%] text-[1.1em] outline text-black active:scale-[95%] py-[.4em] rounded-lg hover:bg-gray-100"
                >
                  Edit
                </button>
              )}
              {isEdit == true ? (
                <button
                  onClick={editHandler}
                  type="button"
                  className="w-[50%] text-[1.1em] bg-black text-white active:scale-[95%] py-[.5em] rounded-lg hover:bg-gray-700"
                >
                  Cancle
                </button>
              ) : (
                <button
                  onClick={deleteHandler}
                  type="button"
                  className="w-[50%] text-[1.1em] bg-black text-white active:scale-[95%] py-[.5em] rounded-lg hover:bg-gray-700"
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
