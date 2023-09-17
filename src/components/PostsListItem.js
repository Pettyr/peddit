import React from 'react';
import ROUTES from '../app/routes';
import { Link } from 'react-router-dom'
import ImagePreview from './ImagePreview';

export default function PostsListItem({ post }) {
const { title,
        author,
        num_comments,
        preview, 
        subreddit,
        id } = post.data;
    

const handlePostClick = () => {
  if (preview) {
  localStorage.setItem('preview', JSON.stringify(preview));
  }
  else {
  localStorage.removeItem('preview');
  }
}

  return (
    <section className="card">
      <div className="post-header"> 
        <Link to={ROUTES.commentsRoute(subreddit, id)} onClick={handlePostClick}>
        <h3 className='post-title'>{title}</h3>
        </Link>
        <div className='post-preview'>
          <ImagePreview preview={preview} />
        </div> 
      </div>
        <div className='post-content'>
        <p className='post-author'>Posted by: {author}</p>
        <p className='post-comments'>Comments: {num_comments}</p>
        </div>
    </section>
  );
}
