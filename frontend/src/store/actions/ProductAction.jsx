import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProducts())
    toast.success("product created successfully!!🙂");
  } catch (error) {
    console.log(error);
  }
};


export const asyncUpdateProduct = (id,product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product);
    dispatch(asyncLoadProducts());
    toast.success("Product Updated Successfully!!🙂");
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncLoadProducts());
    toast.success("Product Deleted Successfully!!🙂");
  } catch (error) {
    console.log(error);
  }
};