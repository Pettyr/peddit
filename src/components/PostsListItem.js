import React from 'react';
import ROUTES from '../app/routes';
import { Link } from 'react-router-dom'


export default function PostsListItem({ post }) {
const { title,
        author,
        num_comments,
        preview, 
        subreddit,
        id } = post.data

  const getUrl = (imgUrl) => {
    let encoded = imgUrl.replace('amp;s', 's')
    let doubleEncoded = encoded.replace('amp;', '')
    let tripleEncoded = doubleEncoded.replace('amp;', '')
    return tripleEncoded
  };

  return (
    <section className="card">
        <h3 className='post-title'>{title}</h3>
        <Link to={ROUTES.commentsRoute(subreddit, id, title)} >
        <div className='post-preview'>
          {preview ? <img src={getUrl(preview.images[0].source.url)} alt="preview" /> : null}
        </div>
        <div className='post-content'>
        <p className='post-author'>Posted by: {author}</p>
        <p className='post-comments'>Comments: {num_comments}</p>
        </div>
        </Link>
    </section>
  );
}