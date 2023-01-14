import React from "react";
import { useNavigate } from "react-router-dom";
import pic_login from "../assets/img/pic-login.jpg";
import signUp from "../utils/auth/signUp.util";
import "../assets/css/Login.css";
import { useAnalytics } from "use-analytics";

const SignUp = () => {
  const navigate = useNavigate();

  const { track, page, identify } = useAnalytics();

  const emailRef = React.useRef(null);
  const pwdRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const ageRef = React.useRef(null);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, []);

  const handleSubmit = () => {
    console.log(emailRef);
    if (emailRef.current && pwdRef.current) {
      signUp(emailRef.current.value, pwdRef.current.value, {
        name: nameRef.current.value,
        age: ageRef.current.value,
        phone: phoneRef.current.value,
      })
        .then((credentials) => {
          console.log("Successful");
          return navigate("/dashboard");
          try {
            identify("user", { email: credentials.email });
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
              SignUp<span>.</span>
            </h2>
          </div>
          <input
            type="email"
            label="Email"
            id="email"
            ref={emailRef}
            className="login-name"
            placeholder="Email"
          />
          <input
            type="text"
            label="Usernam"
            id="username"
            ref={nameRef}
            className="login-name"
            placeholder="Username"
          />
          <input
            type="number"
            label="Phone number"
            id="phone"
            ref={phoneRef}
            className="login-name"
            placeholder="Phone number (optional)"
          />
          <input
            type="number"
            label="Age"
            id="age"
            ref={ageRef}
            className="login-name"
            placeholder="Age"
          />
          <input
            type="password"
            label="assword"
            id="password"
            ref={pwdRef}
            className="login-password"
            placeholder="Password"
          />
          {error && <p className="login-error error">{error}</p>}
          <button className="login-button" onClick={handleSubmit}>
            SignUp{" "}
          </button>
          <div className="login-social"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
