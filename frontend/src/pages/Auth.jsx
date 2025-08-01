import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  return (
    <section className="h-screen flex justify-center xl:justify-between">
      <Register/>
      <Login/>
    </section>
  );
};

export default Auth;
