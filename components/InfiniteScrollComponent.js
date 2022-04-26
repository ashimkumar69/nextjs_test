import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollComponent = ({ data }) => {
  const [posts, setPosts] = React.useState(data);
  const [hasMore, setHasMore] = React.useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  React.useEffect(() => {
    if (posts.length >= 100) {
      setHasMore(false);
    }
  }, [posts]);

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.id}>
            <div className="back">
              <strong> {data.id}</strong> {data.title}
            </div>
            {data.completed}
          </div>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default InfiniteScrollComponent;
