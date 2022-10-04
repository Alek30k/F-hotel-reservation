import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [openOptions, setOpenOptions] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Arcbooking</span>
        </Link>
        <div className="avatar">
          {user ? (
            <div onClick={() => setOpenOptions(!openOptions)}>
              {user.username}
              {openOptions && (
                <div className="option">
                  <div onClick={handleClick} className="optionItem">
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="navItems">
              <Link to="/register">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
