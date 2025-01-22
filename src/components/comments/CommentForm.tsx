import { AuthContext } from "context";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebaseApp";
import { useTranslation } from "hooks";
import { PostProps } from "pages";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export interface CommentFormProps {
  post: PostProps | null;
}

export const CommentForm = ({ post }: CommentFormProps) => {
  const [comment, setComment] = useState<string>("");
  const { user } = useContext(AuthContext);
  const t = useTranslation();

  const truncate = (str: string) => {
    return str?.length > 10 ? str?.substring(0, 10) + "..." : str;
  };

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

      if (user?.uid !== post?.uid) {
        await addDoc(collection(db, "notifications"), {
          createdAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          uid: post?.uid,
          isRead: false,
          url: `/posts/${post?.id}`,
          content: `"${truncate(post?.content)}" 글에 댓글이 작성되었습니다.`,
        });
      }

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
        placeholder={t("POST_PLACEHOLDER")}
        onChange={onChangeHandler}
        value={comment}
      />
      <div className="post-form__submit-area">
        <div />
        <input
          type="submit"
          value={t("BUTTON_COMMENT")}
          className="post-form__submit-btn"
          disabled={!comment}
        />
      </div>
    </form>
  );
};
