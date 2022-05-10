import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import "./LoginScreen.css";
const LoginInvestor = ({ history }) => {
  sessionStorage.clear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      history.push("/loginInvestor");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://codeveloperslancini.herokuapp.com/auth/loginInvestor",
        { email, password },
        config
      );
      console.log('logged');
      sessionStorage.setItem("authToken", data.token);

      history.push("/myProfile");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const handleLogin = async (googleData) => {
    const res = await fetch("https://codeveloperslancini.herokuapp.com/api/google-login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
    });

    const datag = await res.json();
    setLoginData(datag);
    console.log(datag);
    localStorage.setItem("loginData", JSON.stringify(datag));
    try {
        const { data } = await axios.post(
          "https://codeveloperslancini.herokuapp.com/auth/loginInvestor",
          datag
        );
        console.log('logged');
        localStorage.setItem("authToken", data.token);
  
        history.push("/myProfile");
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
  };
  const handleFailure = (result) => {
    alert(result);
  };



  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <GoogleLogin
              clientId="671697475830-un4oqehgrhenbc78jmlaogjs1gmilbvn.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={handleLogin}
             
              cookiePolicy={"single_host_origin"}
            />
          

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/registerInvestor">Register</Link>
        </span>
        <span className="login-screen__subtext">
          You want to go back? <Link to="/HomeVisitor">Home</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginInvestor;