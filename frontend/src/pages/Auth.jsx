import { motion } from "framer-motion";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        y: 10,
        transition: { duration: 0.3, ease: "easeIn" },
      }}
      className="h-screen flex justify-center xl:justify-between"
    >
      <Register />
      <Login />
    </motion.section>
  );
};

export default Auth;
