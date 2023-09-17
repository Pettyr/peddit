import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    fetchSearchResults,
    selectSearchResults,
    isFetchingSearchResults
} from './searchResultsSlice'
import PostsListItem from '../../components/PostsListItem';

const SearchResults = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectSearchResults);
    const isFetching = useSelector(isFetchingSearchResults);
    console.log('posts:', posts)
    
    useEffect(() => {
      dispatch(fetchSearchResults());
    }, [dispatch]);
  
    if (isFetching) {
      return <div className='post-container'>Fetching posts</div>;
    }
  
    return (
      <section>
        <div className="post-container">
          <h2>Peddit Posts</h2>
          {posts.map((post) => (
              <div key={post.data.id}>
                <PostsListItem post={post} />
              </div>
          ))}
        </div>
      </section>
    );
  }


export default SearchResults;