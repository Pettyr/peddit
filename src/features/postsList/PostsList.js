import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsList,
  selectPostsList,
  isFetching,
} from './postsListSLice';
import './postsListAPI.css'
import SkeletonLoader from '../../utilities/skeletonLoaderPostsList';
import PostsListItem from '../../components/PostsListItem';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsList);
  const isFetchingPostsList = useSelector(isFetching);
  const [selectedCategory, setSelectedCategory] = useState('popular')
  console.log('posts:', posts)
  
  useEffect(() => {
    dispatch(fetchPostsList(selectedCategory));
  }, [dispatch, selectedCategory]);

  if (isFetchingPostsList) {
    return <div className="post-container">
        <h2>Posts</h2>
        <div>
        <label htmlFor="category">Select Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="best">Best</option>
          <option value="popular">Popular</option>
          <option value="rising">Rising</option>
          <option value="controversial">Controversial</option>
        </select>
      </div> 
      <SkeletonLoader count={posts.length} />;
      </div>
  };

  return (
    <section>
      <div className="post-container">
        <h2>Posts</h2>
        <div>
        <label htmlFor="category">Select Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="best">Best</option>
          <option value="popular">Popular</option>
          <option value="rising">Rising</option>
          <option value="controversial">Controversial</option>
        </select>
      </div>
        {posts.map((post) => (
            <div key={post.data.id}>
              <PostsListItem post={post} />
            </div>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
