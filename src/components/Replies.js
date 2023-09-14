import React, { useState, useEffect } from 'react';
import loadMoreReplies from '../features/loadMoreReplies/loadMoreReplies';

const Replies = ({ reply }) => {
  const { data, kind } = reply;
  
  const {
    body,
    ups,
    replies,
    link_id
  } = data;
  const [showReplies, setShowReplies] = useState(false);
  const renderReplyCount = replies ? replies.data.children.length : 0;



  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  console.log('linkId:', link_id);

  const renderReplies = () => {
    if (!showReplies || !replies || !replies.data.children.length) {
      return null;
    }
  
    return (
      <div className="replies">
        {replies.data.children.map((nestedReply) => {
          if (nestedReply.kind === 'more') {
            return (
              <button
                key={nestedReply.data.id}
                className='more-replies-button'
                onClick={() => loadMoreReplies(nestedReply, link_id)}
              >
                Load More Replies
              </button>
            );
          } else {
            return (
              <Replies key={nestedReply.data.id} reply={nestedReply} />
            );
          }
        })}
      </div>
    );
  };

  return (
    <section className='reply'>
      <div className="comment-card">
        <p className="comment">{body}</p>
        <p className="comment-upvotes">{ups} upvotes</p>
      </div>
      {renderReplyCount > 0 && (
        <button className='comment-replies' onClick={toggleReplies}>
          {showReplies ? 'Hide Replies' : `Show ${renderReplyCount} Replies`}
        </button>
      )}
      {showReplies && renderReplies()}
    </section>
  );
};

export default Replies;
