import { Loader, PostBox } from "components";
import { PostProps } from "pages/home";
import { useState } from "react";

export const PostDetailPage = () => {
  const [post, setPost] = useState<PostProps | null>(null);

  return (
    <div className="post">{post ? <PostBox post={post} /> : <Loader />}</div>
  );
};
