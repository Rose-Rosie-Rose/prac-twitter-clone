import { PostBox } from "components";
import { PostProps } from "pages/home";
import { useState } from "react";

export const SearchPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [tagQuery, setTagQuery] = useState<string>("");

  const handleOnChange = (e: any) => {
    setTagQuery(e?.target?.value?.trim());
  };

  return (
    <div className="home">
      <div className="home__top">
        <div className="home__title">
          <div className="home__title-text">Search</div>
        </div>
        <div className="home__search-div">
          <input
            className="home__search"
            placeholder="해시태그 검색"
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="post">
        <div className="post">
          {posts?.length > 0 ? (
            posts?.map((post) => <PostBox post={post} key={post.id} />)
          ) : (
            <div className="post__no--posts">
              <div className="post__text">게시글이 없습니다.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
