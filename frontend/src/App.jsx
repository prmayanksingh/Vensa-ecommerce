import { useEffect } from "react";
import Home from "./pages/Home";
import MainRoute from "./routes/MainRoute";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserAction";
import { asyncLoadProducts } from "./store/actions/ProductAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="font-[Helvetica] tracking-wide">
      <MainRoute />
    </div>
  );
};

export default App;
