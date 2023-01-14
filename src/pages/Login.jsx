import React from "react";

import ic_google from "../assets/svg/ic-google.svg";
import ic_facebook from "../assets/svg/ic-facebook.svg";
import ic_github from "../assets/svg/ic-github.svg";
import pic_login from "../assets/img/pic-login.jpg";
import { useAnalytics } from "use-analytics";

import socialSignUp from "../utils/auth/socialLogin.util";
import signIn from "../utils/auth/signIn.util";

import "../assets/css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const { track, page, identify } = useAnalytics();

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
          try {
            identify("user", { email: credentials.email });
            return navigate("/dashboard");
          } catch (e) {}
        })
        .catch((err) => {
          setError(err.message || "An unknown error occured");
        });
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-img-container">
          <img src={pic_login}></img>
        </div>
        <div className="login-content">
          <div className="login-title">
            <h2>
              Login<span>.</span>
            </h2>
          </div>
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
            placeholder="Password"
          />
          <p>
            Already a member? <Link to={"/signup"}>Sign Up</Link>
          </p>
          {error && <p className="login-error error">{error}</p>}
          <button className="login-button" onClick={handleSubmit}>
            Login{" "}
          </button>
          <div className="login-social">
            <img src={ic_google} onClick={() => socialSignUp("google")} />
            <img src={ic_facebook} />
            <img src={ic_github}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
