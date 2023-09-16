// In Comments.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchComments,
  selectCommentsData,
  isFetchingComments,
} from './commentsSlice';
import { useParams } from 'react-router-dom';
import Comment from '../../components/Comment'
import './comments.css'
import ImagePreview from '../../components/ImagePreview';

const Comments = () => {
  const dispatch = useDispatch();
  const { subreddit, postId, title } = useParams()
  const comments = useSelector(selectCommentsData);
  console.log('comments:', comments);
  const preview = JSON.parse(localStorage.getItem('preview'));
  const isFetchingCommentsList = useSelector(isFetchingComments);
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [numCommentsToShow, setNumCommentsToShow] = useState(5);
   // Adjust the number of comments to show 
  console.log('preview:', preview);
  useEffect(() => {
    dispatch(fetchComments({ subreddit, postId}));
  }, [dispatch, subreddit, postId]);

  const toggleMoreComments = async () => {
    setShowMoreComments(!showMoreComments);
  };
  
  if (isFetchingCommentsList) {
    return <div className='comment-container'>Fetching comments</div>;
  }

  const visibleComments = showMoreComments ? comments : comments.slice(0, numCommentsToShow);


  return (
    <>
    <div className="comments-header">
      <h2 className="post-title">{title}</h2>
      <div className="post-preview">
      <ImagePreview preview={preview} />
      </div>
      <hr /> 
    </div>
      <h2 className="comments-page-heading">Comments</h2>
      <div className="comments-container">
        {visibleComments.map((comment) => (
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
    </>
  );
};

export default Comments;
