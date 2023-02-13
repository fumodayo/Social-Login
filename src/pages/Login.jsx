import { Facebook, Google, Github } from "../assets";

const Login = () => {
  return (
    <div className="login">   
      <div className="loginButton google">
        <img src={Google} alt="" className="icon" />
        Google
      </div>
      <div className="loginButton facebook">
        <img src={Facebook} alt="" className="icon" />
        Facebook
      </div>
      <div className="loginButton github">
        <img src={Github} alt="" className="icon" />
        Github
      </div>
    </div>
  );
};

export default Login;
