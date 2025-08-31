import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
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

const MainRoute = ({ startHero }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    const isReload = nav && nav.type === "reload";

    if (isReload && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={"nav-" + location.pathname}
          initial={{ y: -80, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          exit={{
            y: -80,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
        >
          <Nav />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home startHero={startHero} />} />
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
      </AnimatePresence>
    </>
  );
};

export default MainRoute;
