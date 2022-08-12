import { useSelector } from 'react-redux';
import Post from "../post/Post.js";
import { selectPosts, selectIsLoadingPosts, selectFailedToLoadPosts } from "./reducer.js";

function Posts() {
  const posts = useSelector(selectPosts);
  const isLoadingPosts = useSelector(selectIsLoadingPosts);
  const failedToLoadPosts = useSelector(selectFailedToLoadPosts);
  if (isLoadingPosts) return (
    <div className="loading-container">
      <h3>Loading...</h3>
    </div>
  )
  if (failedToLoadPosts) return (
    <div className="error-container">
      <h3>Error: Failed to load posts</h3>
    </div>
  )
  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          key={post.data.id}
          score={post.data.score}
          subreddit_name_prefixed={post.data.subreddit_name_prefixed}
          author={post.data.author}
          permalink={post.data.permalink}
          url={post.data.url}
          title={post.data.title}
          media={post.data.media}
          over_18={post.data.over_18}
          spoiler={post.data.spoiler}
          is_video={post.data.is_video}
          num_comments={post.data.num_comments}
        />
      ))}
    </div>
  );
}

export default Posts;
