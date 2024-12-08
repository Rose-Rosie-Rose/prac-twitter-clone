import { BsHouse } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const MenuList = () => {
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
        <button type="button" onClick={() => handleNavigation("/")}>
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};
