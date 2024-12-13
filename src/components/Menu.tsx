import { AuthContext } from "context";
import { useContext } from "react";
import { BsHouse } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout, MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const MenuList = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <div className="footer__grid">
        <button type="button" onClick={() => handleNavigation("/")}>
          <BsHouse />
          Home
        </button>
        <button type="button" onClick={() => handleNavigation("/profile")}>
          <FaUserCircle />
          Profile
        </button>
        {user === null ? (
          <button
            type="button"
            onClick={() => handleNavigation("/users/login")}
          >
            <MdLogin />
            Login
          </button>
        ) : (
          <button type="button" onClick={() => handleNavigation("/")}>
            <MdLogout />
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
