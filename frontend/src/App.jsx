import { useEffect } from "react";
import Home from "./pages/Home";
import MainRoute from "./routes/MainRoute";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asyncCurrentUser());
  },[])  

  return (
    <div>
      <MainRoute />
    </div>
  );
};

export default App;
