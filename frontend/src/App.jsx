import { useEffect } from "react";
import asyncgetuser from "./store/userAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const data = useSelector(state=>state.user);
  const dispatch = useDispatch();

  console.log(data)

  useEffect(() => {
    dispatch(asyncgetuser());
  }, []);

  return <div>App</div>;
};

export default App;
