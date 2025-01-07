import { PostHeader } from "components";
import { useState } from "react";
import { FiImage } from "react-icons/fi";

export const ProfileEditPage = () => {
  const [displayName, setDisplayName] = useState<string>("");
  const HandleOnChange = () => {};

  const handleFileUpload = () => {};

  return (
    <div className="post">
      <PostHeader />
      <form className="post-form">
        <div className="post-form__profile">
          <input
            type="text"
            name="displayName"
            className="post-form__input"
            placeholder="이름"
            onChange={HandleOnChange}
            value={displayName}
          />
          <div className="post-form__submit-area">
            <div className="post-form__image-area">
              <label className="post-form__file" htmlFor="file-input">
                <FiImage className="post-form__file-icon" />
              </label>
            </div>
            <input
              type="file"
              name="file-input"
              id="file-input"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <input
              type="submit"
              value="프로필 수정"
              className="post-form__submit-btn"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
