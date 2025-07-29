import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";

const asyncgetuser = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/users");
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log(error);
  }
};

export default asyncgetuser;
