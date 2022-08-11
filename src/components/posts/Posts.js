import { useSelector } from 'react-redux';
import Post from "../post/Post.js";
import { selectPosts, selectIsLoadingPosts } from "./reducer.js";

function Posts() {
  const posts = useSelector(selectPosts);
  const isLoadingPosts = useSelector(selectIsLoadingPosts);
  if (isLoadingPosts) return (
    <p>Loading...</p>
  )
  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          key={post.data.id}
          score={post.data.score}
          author={post.data.author}
          permalink={post.data.permalink}
          url={post.data.url}
          title={post.data.title}
          media={post.data.media}
          is_video={post.data.is_video}
          num_comments={post.data.num_comments}
        />
      ))}
    </div>
  );
}

export default Posts;
