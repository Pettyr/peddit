import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsList,
  selectPostsList,
  isFetching,
} from './postsListSLice';
import './postsListAPI.css'

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsList);
  const isFetchingPostsList = useSelector(isFetching);

  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);

  if (isFetchingPostsList) {
    return <div>fetching state</div>;
  }

  return (
    <section>
      <h2>Reddit Posts</h2>
      <div className="card-container">
        {/* Render posts from the Redux store */}
        {posts.map((post) => (
            <div className="card">
              <h3>{post.title}</h3>
              <p>Author: {post.author}</p>
              <p>Date: {post.created_utc}</p>
            </div>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
