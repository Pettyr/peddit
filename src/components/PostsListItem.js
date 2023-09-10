import React from 'react';

export default function PostsListItem({ post }) {
  const getUrl = (imgUrl) => {
    let encoded = imgUrl.replace('amp;s', 's')
    let doubleEncoded = encoded.replace('amp;', '')
    let tripleEncoded = doubleEncoded.replace('amp;', '')
    return tripleEncoded
  };

  return (
    <button key={post.data.id} className='card'>
        <h3 className='post-title'>{post.data.title}</h3>
        <div className='post-preview'>
          {post.data.preview ? <img src={getUrl(post.data.preview.images[0].source.url)} alt="preview" /> : null}
        </div>
        <div className='post-content'>
        <p className='post-author'>Posted by: {post.data.author}</p>
        <p className='post-comments'>Comments: {post.data.num_comments}</p>
      </div>
    </button>
  );
}