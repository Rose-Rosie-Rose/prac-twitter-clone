import { PostProps } from "pages";
import { useState } from "react";

export interface CommentProps {
  post: PostProps | null;
}

export const CommentForm = ({ post }: CommentProps) => {
  const [comment, setComment] = useState<string>("");

  const onSubmitHandler = () => {};

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
