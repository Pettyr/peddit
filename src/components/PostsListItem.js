import React from 'react';
import ROUTES from '../app/routes';
import { Link } from 'react-router-dom'
import ImagePreview from './ImagePreview';
import { useDispatch }  from 'react-redux';
import { setPreview } from '../features/imagePreview/previewSlice';

export default function PostsListItem({ post }) {
const { title,
        author,
        num_comments,
        preview, 
        subreddit,
        id } = post.data;
    
const dispatch = useDispatch();

const handlePostClick = () => {
  dispatch(setPreview(preview))
  console.log('Post clicked:', JSON.stringify(preview))
  localStorage.setItem('preview', JSON.stringify(preview));
}

  return (
    <section className="card">
      <div className="post-header"> 
        <Link to={ROUTES.commentsRoute(subreddit, id, title)} onClick={handlePostClick} >
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
