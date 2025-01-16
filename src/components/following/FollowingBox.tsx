import { AuthContext } from "context";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { PostProps } from "pages";
import { useContext } from "react";

interface FollowingProps {
  post: PostProps;
}

export const FollowingBox = ({ post }: FollowingProps) => {
  const { user } = useContext(AuthContext);

  const handleOnClickFollow = async (e: any) => {
    e.preventDefault();

    try {
      if (user?.uid) {
        const followingRef = doc(db, "following", user?.uid);

        await setDoc(
          followingRef,
          {
            users: arrayUnion({ id: post?.uid }),
          },
          { merge: true }
        );

        const followerRef = doc(db, "follower", post?.uid);

        await setDoc(
          followerRef,
          { users: arrayUnion({ id: user?.uid }) },
          { merge: true }
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button className="post__follow-btn" onClick={handleOnClickFollow}>
      Following
    </button>
  );
};
