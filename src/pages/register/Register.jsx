import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER" });
    try {
      const res = await axios.post(
        "https://b-hotel-reservation.herokuapp.com/api/auth/register",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h1>CREATE AN ACCOUNT</h1>
        {/* <div className="form">
            
        </div> */}
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="City"
          id="city"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="text"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />

        <p>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <button disabled={loading} onClick={handleClick} className="lButton">
          SIGN UP
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
