import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/ProductDetails";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        //Products route
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/createproduct" element={<CreateProduct />} />
      </Routes>
    </>
  );
};

export default MainRoute;
