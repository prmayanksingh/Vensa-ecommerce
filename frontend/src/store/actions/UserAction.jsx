import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { loaduser } from "../reducers/UserSlice";

export const asyncCurrentUser = () => async (dispatch, setState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("User not logged in");
  } catch (error) {
    toast.error("Failed To login");
    console.log(error);
  }
};

export const asyncLogoutUser = () => async (dispatch, setState) => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    toast.error("Failed To login!");
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, setState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, setState) => {
  try {
    const res = await axios.post("/users", user);
    toast.success("Registered succefully!🙂")
    console.log(res);
  } catch (error) {
    toast.error(error);
  }
};
