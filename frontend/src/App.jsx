import { useEffect, useState } from "react";
import MainRoute from "./routes/MainRoute";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserAction";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Loader from "./components/Loader";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(t);
  });

  useEffect(() => {
    if (loader) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [loader]);

  return (
    <div className="font-['Helvetica'] tracking-wide">
      <MainRoute />

      <AnimatePresence mode="wait">
        {loader && <Loader key="loader" />}
      </AnimatePresence>
    </div>
  );
};

export default App;
