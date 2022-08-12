function Post({
  score,
  subreddit_name_prefixed,
  author,
  permalink,
  url,
  title,
  media,
  over_18,
  spoiler,
  is_video,
  num_comments
}) {
  const domain = "https://www.reddit.com";
  let fallback_url;
  if (media !== null && media.hasOwnProperty("reddit_video") && !over_18 && !spoiler) {
    ({ fallback_url } = media.reddit_video);
  }
  return (
    <div className="post-container">
      <div className="score score-left">
        <div>{score}</div>
      </div>
      <div className="post-details">
        <div className="subreddit">
          <a href={`${domain}/${subreddit_name_prefixed}/`} target="_blank" rel="noreferrer">{subreddit_name_prefixed}</a>
        </div>
        <span role="presentation">•</span>
        <span>Posted by <a href={`${domain}/user/${author}/`} target="_blank" rel="noreferrer">u/{author}</a></span>
      </div>
      <div className="title">
        <a href={domain + permalink} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
      </div>
      <div className="media-container">
      {fallback_url && (
        <video src={fallback_url} muted>
          <source src={fallback_url} type="application/vnd.apple.mpegURL" />
        </video>
      )}
      {(media && is_video === false && !over_18 && !spoiler) && (
        <img alt="Post image" src={url} />
      )}
      </div>
      <div className="comments-container">
        <a href={domain + permalink} target="_blank" rel="noreferrer">
          <i className="icon icon-comment"></i>
          <span>{num_comments} {num_comments === 1 ? "comment" : "comments"}</span>
        </a>
      </div>
    </div>
  );
}

export default Post;
