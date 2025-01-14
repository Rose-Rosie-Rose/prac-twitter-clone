import { AuthContext } from "context";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { PostProps } from "pages";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export interface CommentProps {
  post: PostProps | null;
}

export const CommentForm = ({ post }: CommentProps) => {
  const [comment, setComment] = useState<string>("");
  const { user } = useContext(AuthContext);

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    if (post && user) {
      const postRef = doc(db, "posts", post?.id);

      const commentObj = {
        comment: comment,
        uid: user?.uid,
        email: user?.email,
        createdAt: new Date()?.toLocaleDateString("ko", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };

      await updateDoc(postRef, {
        comments: arrayUnion(commentObj),
      });

      toast.success("댓글을 생성했습니다.");
      setComment("");

      try {
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "comment") {
      setComment(value);
    }
  };

  return (
    <form className="post-form" onSubmit={onSubmitHandler}>
      <textarea
        className="post-form__textarea"
        name="comment"
        id="comment"
        required
        placeholder="What is happening?"
        onChange={onChangeHandler}
        value={comment}
      />
      <div className="post-form__submit-area">
        <div />
        <input
          type="submit"
          value="comment"
          className="post-form__submit-btn"
          disabled={!comment}
        />
      </div>
    </form>
  );
};
