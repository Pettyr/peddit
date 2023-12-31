import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    fetchSearchResults,
    selectSearchResults,
    isFetchingSearchResults
} from './searchResultsSlice'
import { useSearchParams, createSearchParams } from 'react-router-dom';
import PostsListItem from '../../components/PostsListItem';
import SkeletonLoader from '../../utilities/skeletonLoaderPostsList';

const SearchResults = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q');
    const queryString = createSearchParams({q: query}).toString()
    console.log('queryString', queryString)
    const posts = useSelector(selectSearchResults);
    const isFetching = useSelector(isFetchingSearchResults);
    console.log('posts:', posts)
    
    useEffect(() => {
      dispatch(fetchSearchResults(queryString));
    }, [dispatch]);
  
    if (isFetching) {
      return <div className='post-container'>
        <h2>Results for : "{query}"</h2>
        <SkeletonLoader count={posts.length} />
      </div>;
    }
  
    return (
      <section>
        <div className="post-container">
          <h2>Results for : "{query}"</h2>
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