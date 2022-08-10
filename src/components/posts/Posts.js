import Post from "../post/Post.js";

function Posts({
  posts
}) {
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
