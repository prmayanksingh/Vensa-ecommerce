import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/admin/UpdateProduct";
import UserProfile from "../pages/users/UserProfile";
import PageNotFound from "../pages/PageNotFound";
import AuthWrapper from "./AuthWrapper";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<UserProfile />} />
        //Products route
        <Route path="/products" element={<Products />} />
        <Route
          path="/product/:id"
          element={
              <ProductDetails />
          }
        />
        //Admin route
        <Route
          path="/admin/create-product"
          element={
            <AuthWrapper>
              <CreateProduct />
            </AuthWrapper>
          }
        />
        <Route
          path="/admin/update-product/:id"
          element={
            <AuthWrapper>
              <UpdateProduct />
            </AuthWrapper>
          }
        />
        //PageNotFound
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default MainRoute;
