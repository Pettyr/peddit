import React from 'react';
import ROUTES from '../app/routes';
import { Link } from 'react-router-dom'
import ImagePreview from './ImagePreview';
import { FaRegCommentAlt } from 'react-icons/fa';

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
      <Link to={ROUTES.commentsRoute(subreddit, id)} onClick={handlePostClick} className='custom-link'>
        <p className="post-subreddit">r/{subreddit}</p>
        <p className='post-author'>{author}</p>     
        <h3 className='post-title'>{title}</h3>
      <div className="post-header">
        <div className='post-preview'>       
          <ImagePreview preview={preview} />
        </div> 
      </div>
          <p className='post-comments'>
          <FaRegCommentAlt className="icon" /> 
          {num_comments}
          </p>
        </Link>
    </section>
  );
}
