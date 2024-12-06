import { Link } from "react-router-dom";

export const SignUpForm = () => {
  return (
    <form className="form form--lg">
      <div className="form__title">회원가입</div>
      <div className="form__block">
        <label className="email">이메일</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className="form__block">
        <label className="password">비밀번호</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div className="form__block">
        <label className="password__confirmation">비밀번호 확인</label>
        <input
          type="password"
          name="password__confirmation"
          id="password__confirmation"
          required
        />
      </div>
      <div className="form__block">
        <div className="form__error">{}</div>
      </div>
      <div className="form__block">
        계정이 있으신가요?
        <Link to="/login" className="form__link">
          로그인하기
        </Link>
      </div>
      <div className="form__block">
        <button type="submit" className="form__btn-submit">
          회원가입
        </button>
      </div>
    </form>
  );
};
