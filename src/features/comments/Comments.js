// In Comments.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchComments,
  selectCommentsData,
  selectTitle,
  selectSelfText,
  isFetchingComments,
} from './commentsSlice';
import { useParams } from 'react-router-dom';
import Comment from '../../components/Comment'
import './comments.css'
import SkeletonLoader from '../../utilities/skeletonLoaderComments';
import ImagePreview from '../../components/ImagePreview';

const Comments = () => {
  const dispatch = useDispatch();
  const { subreddit, postId } = useParams()
  const comments = useSelector(selectCommentsData);
  console.log('comments:', comments);
  const storedPreview = localStorage.getItem('preview');
  const parsedPreview = storedPreview ? JSON.parse(storedPreview) : null;
  const title = useSelector(selectTitle)
  const selfText = useSelector(selectSelfText);
  const isFetchingCommentsList = useSelector(isFetchingComments);
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [numCommentsToShow] = useState(5);
   // Adjust the number of comments to show 
  console.log('preview:', parsedPreview);
  useEffect(() => {
    dispatch(fetchComments({ subreddit, postId}));
  }, [dispatch, subreddit, postId]);

  const toggleMoreComments = async () => {
    setShowMoreComments(!showMoreComments);
  };
  
  if (isFetchingCommentsList) {
    return <>
    <SkeletonLoader count={1} />
    <h2 className="comments-page-heading">Comments</h2>
    <SkeletonLoader count={5} />
    </>
  }

  const visibleComments = showMoreComments ? comments : comments?.slice(0, numCommentsToShow);


  return (
    <section className="comments-container">
      <div className="comments-header">
        <h2 className="post-title">{title}</h2>
        <div className="post-preview-comments">
        <p>{selfText? selfText : null}</p>
        <ImagePreview preview={parsedPreview} />
        </div>
        <hr /> 
      </div>
      <h2 className="comments-page-heading">Comments</h2>
      <div className="comments-list">
          {visibleComments?.map((comment) => (
            comment.kind === 'more' ? (
              <button className="load-more-comments" onClick={toggleMoreComments} key={comment.data.id}>
                {showMoreComments ? 'Hide More Comments' : 'Load More Comments'}
              </button>
            ) : (
              <Comment comment={comment} key={comment.data.id} />
            )
          ))}
          {!showMoreComments && (
            <button className="load-more-comments" onClick={toggleMoreComments}>
              Load More Comments
            </button>
          )}
      </div>
    </section>
  );
};

export default Comments;
