import { useEffect } from "react";
import MainRoute from "./routes/MainRoute";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserAction";
import { asyncLoadProducts } from "./store/actions/ProductAction";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="font-[Helvetica] tracking-wide">
      <MainRoute />
    </div>
  );
};

export default App;
