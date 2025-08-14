import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { removeProduct } from "../reducers/ProductSlice";

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    toast.success("product created successfully!!🙂");
  } catch (error) {
    console.log(error);
  }
};


export const asyncUpdateProduct = (id,product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product);
    toast.success("Product Updated Successfully!!🙂");
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(removeProduct(id))
  } catch (error) {
    console.log(error);
  }
};