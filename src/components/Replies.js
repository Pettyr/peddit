import React, { useState, useEffect } from 'react';
import extractMoreCommentIds from '../features/loadMoreReplies/extractMoreCommentIds';

const Replies = ({ reply }) => {
  const { data, kind } = reply;
  
  const {
    body,
    ups,
    replies,
    link_id
  } = data;
  const [showReplies, setShowReplies] = useState(false);
  const [moreReplies, setMoreReplies] = useState([]);
  
  const renderReplyCount = replies ? replies.data.children.length : 0;

  useEffect(() => {
    if (kind === 'more' && replies && replies.data.children.length === 0) {
      const commentIds = extractMoreCommentIds(reply);
      if (commentIds) {
        loadMoreReplies(link_id, commentIds);
      }
    }
  }, [kind, data, replies, link_id]);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const loadMoreReplies = async (nestedReply, link_id) => {
    const kind = nestedReply.kind;
    const commentIds = extractMoreCommentIds(nestedReply)
    try {
      if (kind !== 'more' || !commentIds) {
        // Don't load more replies if it's not a "more" comment or if there are no comment IDs.
        return;
      }
  
      // Construct the API request URL
      const apiUrl = `https://www.reddit.com/api/morechildren.json?link_id=${link_id}&children=${commentIds}&sort=top&api_type=json`;
  
      // Perform the API request to load more replies
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      const newReplies = responseData.json.data.things;
      // Process the responseData and update your state as needed
      console.log('newReplies:', newReplies);
      setMoreReplies([...moreReplies, ...newReplies]);
    } catch (error) {
      console.error('Error loading more replies:', error);
    }
    
  };

  const renderReplies = () => {
    if (!showReplies || !replies || !replies.data.children.length) {
      return null;
    }
  
    const renderedReplies = replies.data.children.map((nestedReply) => {
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
    });
  
    return (
      <div className="replies">
        {renderedReplies}
        {/* Render additional replies */}
        {moreReplies.map((additionalReply) => (
          <Replies key={additionalReply.data.id} reply={additionalReply} />
        ))}
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
