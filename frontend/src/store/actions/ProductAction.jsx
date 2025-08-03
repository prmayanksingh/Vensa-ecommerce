import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { loadproduct } from "../reducers/ProductSlice";

export const asyncLoadProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/products", product);
    console.log(res);
    toast.success("product created successfully!!");
  } catch (error) {
    console.log(error);
  }
};
