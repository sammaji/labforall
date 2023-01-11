import React from "react";
import { AiOutlineGoogle, AiFillFacebook, AiFillGithub } from "react-icons/ai";

import { signIn, socialSignUp } from "../utils/auth/socialLogin.util";

import "../assets/css/Login.css";

const Login = () => {
  const emailRef = React.useRef(null);
  const pwdRef = React.useRef(null);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, []);

  const handleSubmit = () => {
    if (emailRef.current && pwdRef.current) {
      signIn(emailRef.current.value, pwdRef.current.value)
        .then((credentials) => {
          
        })
        .catch((err) => {
          setError(err.message || "An unknown error occured");
        });
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        {error && <p className="login-error error">{error}</p>}
        <div className="login-title">Login</div>
        <input
          type="text"
          label="Email"
          id="email"
          ref={emailRef}
          className="login-name"
          placeholder="Email"
        />
        <input
          type="password"
          label="password"
          id="password"
          ref={pwdRef}
          className="login-password"
          placeholder="enter password"
        />
        <button className="login-button" onClick={handleSubmit}>
          Login{" "}
        </button>
        <div className="login-social">
          <AiOutlineGoogle onClick={() => socialSignUp("google")} />
          <AiFillFacebook />
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};

export default Login;
