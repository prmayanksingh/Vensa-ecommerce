import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { loaduser, removeuser } from "../reducers/UserSlice";

export const asyncCurrentUser = () => async (dispatch, setState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("User not logged in");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = () => async (dispatch, setState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    toast.success("You have logged out!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, setState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    if (data[0] === undefined) {
      toast.error("Failed to login!!");
      return false;
    } else {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(asyncCurrentUser());
      toast.success("Login Successfully!!🙂");
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const asyncRegisterUser = (user) => async (dispatch, setState) => {
  try {
    await axios.post("/users", user);
    toast.success("Registered succefully!🙂");
  } catch (error) {
    toast.error(error);
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, setState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncCurrentUser());
    toast.success("Updated succefully!🙂");
  } catch (error) {
    toast.error(error);
  }
};

export const asyncDeleteUser = (id) => async (dispatch, setState) => {
  try {
    await axios.delete("/users/" + id);
    localStorage.removeItem("user");
    dispatch(removeuser());
    toast.success("Account Deleted!🥲");
  } catch (error) {
    toast.error(error);
  }
};
 