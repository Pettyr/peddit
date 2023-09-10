import React from 'react';

export default function PostsListItem({ post }) {
  console.log(post.title)
  return (
      <div className='post-content-container'>
        <h3 className='post-title'>{post.title}</h3>
        <p className='post-preview'>{post.preview}</p>
      </div>
  );
}
