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
          <span className="footer__grid--text">{t("MENU_HOME")}</span>
        </button>
        <button type="button" onClick={() => handleNavigation("/profile")}>
          <FaUserCircle />
          <span className="footer__grid--text">{t("MENU_PROFILE")}</span>
        </button>
        <button type="button" onClick={() => handleNavigation("/search")}>
          <AiOutlineSearch />
          <span className="footer__grid--text">{t("MENU_SEARCH")}</span>
        </button>
        <button
          type="button"
          onClick={() => handleNavigation("/notifications")}
        >
          <IoMdNotificationsOutline />
          <span className="footer__grid--text">{t("MENU_NOTI")}</span>
        </button>
        {user === null ? (
          <button
            type="button"
            onClick={() => handleNavigation("/users/login")}
          >
            <MdLogin />
            <span className="footer__grid--text">{t("MENU_LOGIN")}</span>
          </button>
        ) : (
          <button type="button" onClick={handleLogout}>
            <MdLogout />
            <span className="footer__grid--text">{t("MENU_LOGOUT")}</span>
          </button>
        )}
      </div>
    </div>
  );
};
