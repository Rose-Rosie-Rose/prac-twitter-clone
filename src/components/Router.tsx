import {
  HomePage,
  LoginPage,
  NotificationsPage,
  PostDetailPage,
  PostEditPage,
  PostListPage,
  ProfileEditPage,
  ProfilePage,
  SearchPage,
  SignUpPage,
} from "pages";
import { PostNewPage } from "pages/posts/new";
import { Navigate, Route, Routes } from "react-router-dom";

interface RouterProps {
  isAuthenticated: boolean;
}

export const Router = ({ isAuthenticated }: RouterProps) => {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {" "}
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/posts/new" element={<PostNewPage />} />
          <Route path="/posts/edit/:id" element={<PostEditPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          {" "}
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate replace to="/users/login" />} />
        </>
      )}
    </Routes>
  );
};
