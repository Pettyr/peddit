import React, { useState, useEffect } from 'react';
import extractMoreCommentIds from '../features/loadMoreReplies/extractMoreCommentIds';
import ReactMarkdown from 'react-markdown';
import { BiUpvote } from 'react-icons/bi';

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
  const [buttonClicked, setButtonClicked] = useState(false);
  
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
      setButtonClicked(true);

    } catch (error) {
      console.error('Error loading more replies:', error);
    }
    
  };

  const renderReplies = () => {
  if (!showReplies || !replies || !replies.data.children.length) {
    return null;
  }

  // Create an array to store rendered replies and additional replies
  const renderedReplies = [];

  replies.data.children.forEach((nestedReply) => {
    if (nestedReply.kind === 'more') {
      // Render "Load More Replies" button if it's not clicked
      if (!buttonClicked) {
        renderedReplies.push(
          <button
            key={nestedReply.data.id}
            className='more-replies-button'
            onClick={() => loadMoreReplies(nestedReply, link_id)}
          >
            Load More Replies
          </button>
        );
      }
    } else {
      // Render individual reply
      renderedReplies.push(
        <Replies key={nestedReply.data.id} reply={nestedReply} />
      );
    }
  });

  // Render additional replies if available
  if (moreReplies && moreReplies.length > 0) {
    moreReplies.forEach((additionalReply) => {
      renderedReplies.push(
        <Replies key={additionalReply.data.id} reply={additionalReply} />
      );
    });
  }

  return (
    <div className="replies">
      {renderedReplies}
    </div>
  );
};
const replyOrReplies = (renderReplyCount) => {
  if (renderReplyCount < 2) {
    return "Reply"
  } else if (renderReplyCount >= 2) {
} return "Replies"
}
  

  return (
    <section className='reply'>
      <div className="comment-reply-card">
        <ReactMarkdown className="comment">{body}</ReactMarkdown>
      <div className="comment-upvotes"> 
      <p><BiUpvote /> {ups} </p>
      <p>{renderReplyCount > 0 && (
        <button className='comment-replies-button' onClick={toggleReplies}>
          {showReplies ? 'Hide Replies' : `${renderReplyCount} ${replyOrReplies(renderReplyCount)}`}
        </button>
      )}
      {showReplies && renderReplies()}
      </p>
      </div>
      </div>
    </section>
  );
};

export default Replies;
