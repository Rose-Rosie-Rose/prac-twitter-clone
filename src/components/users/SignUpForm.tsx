import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "firebaseApp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignUpForm = () => {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      navigate("/");
      toast.success("성공적으로 회원가입이 되었습니다.");
    } catch (error: any) {
      toast.error(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);

      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상 입력해주세요.");
      } else if (value !== passwordConfirmation) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다.");
      } else {
        setError("");
      }
    }

    if (name === "password__confirmation") {
      setPasswordConfirmation(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상 입력해주세요.");
      } else if (value !== password) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다.");
      } else {
        setError("");
      }
    }
  };

  const onClickSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    let provider;
    const auth = getAuth(app);

    if (name === "google") {
      provider = new GoogleAuthProvider();
    }

    if (name === "github") {
      provider = new GithubAuthProvider();
    }

    await signInWithPopup(
      auth,
      provider as GithubAuthProvider | GoogleAuthProvider
    )
      .then((result) => {
        toast.success("로그인 되었습니다.");
      })
      .catch((error) => {
        const errorMessage = error?.message;

        toast?.error(errorMessage);
      });
  };

  return (
    <form className="form form--lg" onSubmit={onSubmit}>
      <div className="form__title">회원가입</div>
      <div className="form__block">
        <label className="email">이메일</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          required
          onChange={onChange}
        />
      </div>
      <div className="form__block">
        <label className="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          required
          onChange={onChange}
        />
      </div>
      <div className="form__block">
        <label className="password__confirmation">비밀번호 확인</label>
        <input
          type="password"
          name="password__confirmation"
          id="password__confirmation"
          value={passwordConfirmation}
          required
          onChange={onChange}
        />
      </div>
      {error && error?.length > 0 && (
        <div className="form__block">
          <div className="form__error">{error}</div>
        </div>
      )}
      <div className="form__block">
        계정이 있으신가요?
        <Link to="/users/login" className="form__link">
          로그인하기
        </Link>
      </div>
      <div className="form__block--lg">
        <button
          type="submit"
          className="form__btn--submit"
          disabled={error?.length > 0}
        >
          회원가입
        </button>
      </div>
      <div className="form__block">
        <button
          type="button"
          name="google"
          className="form__btn--google"
          onClick={onClickSocialLogin}
        >
          Google로 회원가입
        </button>
      </div>
      <div className="form__block">
        <button
          type="button"
          name="github"
          className="form__btn--github"
          onClick={onClickSocialLogin}
        >
          Github으로 회원가입
        </button>
      </div>
    </form>
  );
};
