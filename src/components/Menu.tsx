import { AuthContext } from "context";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import { BsHouse } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLogout, MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdNotificationsOutline } from "react-icons/io";

export const MenuList = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const hadnleLogout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
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
        <button type="button" onClick={() => handleNavigation("/search")}>
          <AiOutlineSearch />
          Search
        </button>
        <button
          type="button"
          onClick={() => handleNavigation("/notifications")}
        >
          <IoMdNotificationsOutline />
          Notifications
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
          <button type="button" onClick={hadnleLogout}>
            <MdLogout />
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
