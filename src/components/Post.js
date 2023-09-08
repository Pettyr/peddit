import React from 'react';
import { useParams } from 'react-router-dom';
import dummyPosts from '../assets/dummyPosts';
import './Post.css';

function Post() {
  // Get the postId parameter from the URL
  const { postID } = useParams();

  // Find the post with the matching id
  const post = dummyPosts.find(post => post.id === parseInt(postID));
    console.log(postID);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p className="post-content">{post.content}</p>
      <div className="comments">
        {post.comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p className="comment-author">Comment by: {comment.author}</p>
            <p className="comment-content">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
