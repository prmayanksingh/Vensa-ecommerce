import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Nav from "../components/Nav";
const Home = lazy(() => import("../pages/Home"));
const Auth = lazy(() => import("../pages/Auth"));
const Cart = lazy(() => import("../pages/Cart"));
const Products = lazy(() => import("../pages/Products"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const UpdateProduct = lazy(() => import("../pages/admin/UpdateProduct"));
const UserProfile = lazy(() => import("../pages/users/UserProfile"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const UnauthWrapper = lazy(() => import("./UnauthWrapper"));

const MainRoute = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/auth"
          element={
            <UnauthWrapper>
              <Auth />
            </UnauthWrapper>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthWrapper>
              <UserProfile />
            </AuthWrapper>
          }
        />
        //Products route
        <Route path="/products" element={<Products />} />
        <Route
          path="/product/:id"
          element={
            <AuthWrapper>
              <ProductDetails />
            </AuthWrapper>
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
