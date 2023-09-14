import extractMoreCommentIds from "./extractMoreCommentIds";



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
      const moreReplies = responseData.json.data.things;
      // Process the responseData and update your state as needed
      console.log('moreReplies:', moreReplies);
      return moreReplies;
    } catch (error) {
      console.error('Error loading more replies:', error);
    }
    
  };
  
  export default loadMoreReplies;