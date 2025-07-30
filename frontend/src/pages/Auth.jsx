import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  return (
    <div className="h-screen flex justify-center xl:justify-between">
      <Register/>
      <Login/>
    </div>
  );
};

export default Auth;
