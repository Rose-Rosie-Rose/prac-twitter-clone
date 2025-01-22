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
import { useTranslation } from "hooks";

export const MenuList = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const t = useTranslation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
  };

  return (
    <div className="footer">
      <div className="footer__grid">
        <button type="button" onClick={() => handleNavigation("/")}>
          <BsHouse />
          {t("MENU_HOME")}
        </button>
        <button type="button" onClick={() => handleNavigation("/profile")}>
          <FaUserCircle />
          {t("MENU_PROFILE")}
        </button>
        <button type="button" onClick={() => handleNavigation("/search")}>
          <AiOutlineSearch />
          {t("MENU_SEARCH")}
        </button>
        <button
          type="button"
          onClick={() => handleNavigation("/notifications")}
        >
          <IoMdNotificationsOutline />
          {t("MENU_NOTI")}
        </button>
        {user === null ? (
          <button
            type="button"
            onClick={() => handleNavigation("/users/login")}
          >
            <MdLogin />
            {t("MENU_LOGIN")}
          </button>
        ) : (
          <button type="button" onClick={handleLogout}>
            <MdLogout />
            {t("MENU_LOGOUT")}
          </button>
        )}
      </div>
    </div>
  );
};
