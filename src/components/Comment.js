import React, { useState, useEffect } from 'react';
import Replies from "./Replies"
import extractMoreCommentIds from '../features/loadMoreReplies/extractMoreCommentIds';
import ReactMarkdown from 'react-markdown';

const Comment = ({ comment }) => {
  // Render the comment content here
  const {data, kind} = comment;
  const {
            body,
            ups,
            replies,
            link_id
        } = data

  const [showReplies, setShowReplies] = useState(false);
  const [moreReplies, setMoreReplies] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const renderReplyCount = replies ? replies.data.children.length : 0;

  useEffect(() => {
    if (kind === 'more' && replies && replies.data.children.length === 0) {
      const commentIds = extractMoreCommentIds(comment);
      if (commentIds) {
        loadMoreReplies(link_id, commentIds);
      }
    }
  }, [kind, replies, link_id]);


  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const loadMoreReplies = async (reply, link_id) => {
    const kind = reply.kind;
    const commentIds = extractMoreCommentIds(reply)
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
      console.log('responseData:', responseData);
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
  
    replies.data.children.forEach((reply) => {
      if (reply.kind === 'more') {
        // Render "Load More Replies" button if it's not clicked
        if (!buttonClicked) {
          renderedReplies.push(
            <button
              key={reply.data.id}
              className='more-replies-button'
              onClick={() => loadMoreReplies(reply, link_id)}
            >
              Load More Replies
            </button>
          );
        }
      } else {
        // Render individual reply
        renderedReplies.push(
          <Replies key={reply.data.id} reply={reply} />
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
      

  return (
    <section className='comment'>
    <div className="comment-card" >
    <ReactMarkdown className="comment">{body}</ReactMarkdown>
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
