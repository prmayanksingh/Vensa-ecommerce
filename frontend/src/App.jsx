import { useEffect } from "react";
import MainRoute from "./routes/MainRoute";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserAction";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  return (
    <div className="font-[Helvetica] tracking-wide">
      <MainRoute />
    </div>
  );
};

export default App;
