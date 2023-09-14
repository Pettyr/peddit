// In Comments.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchComments,
  selectComments,
  isFetchingComments,
} from './commentsSlice';
import { useParams } from 'react-router-dom';
import Comment from '../../components/Comment'
import './comments.css'

const Comments = () => {
  const dispatch = useDispatch();
  const { subreddit, postId, title } = useParams()
  const comments = useSelector(selectComments);
  const isFetchingCommentsList = useSelector(isFetchingComments);
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [numCommentsToShow, setNumCommentsToShow] = useState(5); // Adjust the number of comments to show

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
      <h1 className="post-title">{title}</h1>
      <hr />
      <h2>Comments:</h2>
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
