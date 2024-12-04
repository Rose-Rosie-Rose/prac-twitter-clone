import { PostBox, PostForm } from "components";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likeCount?: number;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "Hello, world!",
    createdAt: "2022-01-01",
    uid: "123123",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "Hello, world!",
    createdAt: "2022-01-01",
    uid: "123123",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "Hello, world!",
    createdAt: "2022-01-01",
    uid: "123123",
  },
  {
    id: "4",
    email: "test@test.com",
    content: "Hello, world!",
    createdAt: "2022-01-01",
    uid: "123123",
  },
];

export const HomePage = () => {
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab">Following</div>
      </div>
      <PostForm />
      <div className="post">
        {posts?.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
