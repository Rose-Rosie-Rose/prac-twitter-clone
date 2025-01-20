import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { NotificationProps } from "pages";
import { useNavigate } from "react-router-dom";

export const NotificationBox = ({
  notification,
}: {
  notification: NotificationProps;
}) => {
  const navigate = useNavigate();

  const onClickNotification = async (url: string) => {
    const ref = doc(db, "notification", notification.id);

    await updateDoc(ref, {
      isRead: true,
    });

    navigate(url);
  };

  return (
    <div key={notification.id} className="notification">
      <div onClick={() => onClickNotification(notification?.url)}>
        <div className="notification__flex">
          <div className="notification__createdAt">
            {notification?.createdAt}
          </div>
          {notification?.isRead === false && (
            <div className="notification__unread" />
          )}
        </div>
        <div className="notification__content">{notification?.content}</div>
      </div>
    </div>
  );
};
