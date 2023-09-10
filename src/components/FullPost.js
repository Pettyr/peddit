import React from 'react';

function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Date: {post.created_utc}</p>
      {/* Render media attachments here */}
      <div className="media-container">
        {/* Render media attachments (e.g., images, videos) */}
      </div>
      {/* Number of Votes: You may need to pass this information from PostList component */}
      <p>Number of Votes: {post.votes}</p>
      <h3>Comments</h3>
      <ul>
        {/* Map over and render comments */}
        {post.comments.map((comment) => (
          <li key={comment.id}>
            <p>Comment by: {comment.author}</p>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
