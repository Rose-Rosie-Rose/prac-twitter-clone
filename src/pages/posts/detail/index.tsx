import {
  CommentBox,
  CommentForm,
  CommentProps,
  Loader,
  PostBox,
  PostHeader,
} from "components";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "firebaseApp";
import { PostProps } from "pages/home";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PostDetailPage = () => {
  const params = useParams();
  const [post, setPost] = useState<PostProps | null>(null);

  const getPost = useCallback(async () => {
    if (params.id) {
      const docRef = doc(db, "posts", params.id);

      onSnapshot(docRef, (doc) => {
        setPost({ ...(doc?.data() as PostProps), id: doc.id });
      });
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) getPost();
  }, [getPost, params.id]);

  return (
    <div className="post">
      <PostHeader />
      {post ? (
        <>
          <PostBox post={post} />
          <CommentForm post={post} />
          {post?.comments
            ?.slice(0)
            ?.reverse()
            ?.map((data: CommentProps, index: number) => (
              <CommentBox data={data} key={index} post={post} />
            ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
