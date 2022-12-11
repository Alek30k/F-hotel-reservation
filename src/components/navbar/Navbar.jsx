import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [openOptions, setOpenOptions] = useState(false);

  const { dispatch } = useContext(AuthContext);
  console.log(user);
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
              <div className="acontainer">
                {user?._doc.username}
                <img
                  src={
                    user._doc.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                  }
                  className="img-avatar"
                />
              </div>

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

        {user?._doc.isAdmin && (
          // <Link to="/admin">
          <button className="admin">Dashboard</button>
          // </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
