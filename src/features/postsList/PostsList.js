import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsList,
  selectPostsList,
  isFetching,
} from './postsListSLice';
import './postsListAPI.css'
import { fetchCurrentPost} from '../currentPost/currentPostSlice'
import PostsListItem from '../../components/PostsListItem';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsList);
  const isFetchingPostsList = useSelector(isFetching);
  console.log('posts:' + posts)

  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);

  if (isFetchingPostsList) {
    return <div className='post-container'>Fetching posts</div>;
  }

  return (
    <section>
      <div className="post-container">
        <h2>Peddit Posts</h2>
        {posts.map((post) => (
            <div key={post.data.id} onClick={(e) => dispatch(fetchCurrentPost(post.data.id))}>
              <PostsListItem post={post} />
            </div>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
