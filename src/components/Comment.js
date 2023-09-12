import React from 'react';



const Comment = ({ comment }) => {
  // Render the comment content here
  const {
            body,
            ups,
            replies,
        } = comment.data

  const renderReply = replies ? replies.data.children : '0';
  return (
    <section className='comment'>
    <div className="comment-card" >
    <p className="comment">{body}</p>
    <p className="comment-upvotes">{ups} upvotes</p>
    </div>
    <button className='comment-replies'> {renderReply.length} Replies </button> 

    </section>
  );
};

export default Comment;
