// In a separate file, e.g., Comments.js
import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(fetchComments({ subreddit, postId}));
  }, [dispatch, subreddit, postId]);

  if (isFetchingCommentsList) {
    return <div className='comment-container'>Fetching comments</div>;
  }

  return (
    <>
      <h1 className="post-title">{title}</h1>
      <hr/>
      <h2>Comments:</h2>
      <div className="comments-container">
        {comments.map((comment) => (
          // Render individual comments here
          <Comment comment={comment} key={comment.data.id} />
        ))}
      </div>
     </>
  );
}

export default Comments;
