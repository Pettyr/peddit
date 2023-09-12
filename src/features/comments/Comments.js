// In a separate file, e.g., Comments.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchComments,
  selectComments,
  isFetchingComments,
} from './commentsSlice';

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const isFetchingCommentsList = useSelector(isFetchingComments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  if (isFetchingCommentsList) {
    return <div className='comment-container'>Fetching comments</div>;
  }

  return (
    <section>
      <div className="post-container">
        <h2>Comments</h2>
        {comments.map((comment) => (
          // Render individual comments here
          <div key={comment.data.id}>
            {/* Render comment content */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;
