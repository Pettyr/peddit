import React from 'react';
import { useParams } from 'react-router-dom';
import dummyPosts from '../assets/dummyPosts';

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
    <div>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>{post.content}</p>
      <p>{post.comments.map(comment => (
            <div key={comment.id}>
                <p>Comment by: {comment.author}</p>
                <p>{comment.content}</p>
            </div>
        ))}
      </p>
    </div>
  );
}

export default Post;
