import React, { useState, useEffect } from 'react';
import Replies from "./Replies"
import extractMoreCommentIds from '../features/loadMoreReplies/extractMoreCommentIds';

const Comment = ({ comment }) => {
  // Render the comment content here
  const {data, kind} = comment;
  const {
            body,
            ups,
            replies,
            parentId,
        } = data

  const [showReplies, setShowReplies] = useState(false);
  const [commentIds, setCommentIds] = useState('');

  const renderReplyCount = replies ? replies.data.children.length : 0;

  useEffect(() => {
    // Extract "more" comment IDs when the component mounts
    if (comment.kind === 'more' && replies === undefined) {
      const extractedCommentIds = extractMoreCommentIds(comment);
      setCommentIds(extractedCommentIds);
    }
  }, [kind, data, comment, replies]);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const loadMoreReplies = async () => {
    try {
      if (kind !== 'more' || !commentIds) {
        // Don't load more replies if it's not a "more" comment or if there are no comment IDs.
        return;
      }
  
      // Construct the API request URL
      const apiUrl = `https://www.reddit.com/api/morechildren.json?link_id=${parentId}&children=${commentIds}&sort=top&api_type=json`;
  
      // Perform the API request to load more replies
      const response = await fetch(apiUrl);
      const responseData = await response.json();
  
      // Process the responseData and update your state as needed
      console.log('responseData:', responseData);
    } catch (error) {
      console.error('Error loading more replies:', error);
    }
  };

  const renderReplies =() => {
    if (!showReplies || !replies || !replies.data.children.length) {
        return null;
    }
    return (
        <div className="replies">
          {replies.data.children.map((reply) => {
            if (reply.kind === 'more') {
              return (
                <button
                  key={reply.data.id}
                  className='more-replies-button'
                  onClick={loadMoreReplies}
                >
                  Load More Replies
                </button>
              );
            } else {
              return (
                <Replies key={reply.data.id} reply={reply} />
              );
            }
          })}
        </div>
      );
    };     

  return (
    <section className='comment'>
    <div className="comment-card" >
    <p className="comment">{body}</p>
    <p className="comment-upvotes">{ups} upvotes</p>
    </div>
    { renderReplyCount > 0 && (
    <button className='comment-replies' onClick={toggleReplies}> 
    {showReplies? 'HideReplies': `Show ${renderReplyCount} Replies`}
    </button>
    )}
    {showReplies && renderReplies()}
    </section>
  );
};

export default Comment;
