import { useEffect } from "react";
import Home from "./pages/Home";
import MainRoute from "./routes/MainRoute";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserAction";
import { asyncLoadProduct } from "./store/actions/ProductAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProduct())
  },[])  

  return (
    <div className="font-[Helvetica] tracking-wide">
      <MainRoute />
    </div>
  );
};

export default App;
