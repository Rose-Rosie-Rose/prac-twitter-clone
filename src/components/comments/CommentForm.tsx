import { PostProps } from "pages";

export interface CommentProps {
  post: PostProps | null;
}

export const CommentForm = ({ post }: CommentProps) => {
  return (
    <form className="post-form">
      <textarea
        className="post-form__textarea"
        name="comment"
        id="comment"
        required
        placeholder="What is happening?"
      />
      <div className="post-form__submit-area">
        <div />
        <input
          type="submit"
          value="comment"
          className="post-form__submit-btn"
        />
      </div>
    </form>
  );
};
