import { AuthContext } from "context";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { PostProps } from "pages";
import { useContext } from "react";
import { toast } from "react-toastify";

interface CommentProps {
  comment: string;
  uid: string;
  email: string;
  createdAt: string;
}

interface CommentBoxProps {
  data: CommentProps;
  post: PostProps;
}

export const CommentBox = ({ data, post }: CommentBoxProps) => {
  const { user } = useContext(AuthContext);

  const handleDeleteComment = async () => {};

  return (
    <div key={data?.createdAt} className="comment">
      <div className="comment__borderBox">
        <div className="comment__img-box">
          <div className="comment__flex-box">
            <img src={`/logo192.png`} alt="profile" />
            <div className="comment__email">{data?.email}</div>
            <div className="comment__createdAt">{data?.createdAt}</div>
          </div>
        </div>
        <div className="comment__content">{data?.comment}</div>
      </div>
      <div className="comment__submit-div">
        {data?.uid === user?.uid && (
          <button
            type="button"
            className="comment__delete-btn"
            onClick={handleDeleteComment}
          >
            삭제
          </button>
        )}
      </div>
    </div>
  );
};
