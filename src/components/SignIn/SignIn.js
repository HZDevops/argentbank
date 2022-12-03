import { useState, useEffect } from "react";
import { useStore, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchLogin } from "../../features/login";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const store = useStore();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchLogin(store, email, password);
  };

  const { error } = useSelector((state) => state.userLogin);
  const { token } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={submitHandler}>
          Sign In
        </button>
        {error && (
          <div>
            <br />
            {error}
          </div>
        )}
      </form>
    </section>
  );
}

export default SignIn;
