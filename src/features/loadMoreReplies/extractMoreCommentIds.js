
export default function extractMoreCommentIds(reply) {
    const commentIds = [];
  
    // Recursively traverse the response reply
    function traverse(reply) {
      if (!reply) {
        return;
      }
  
      if (reply.kind === 'more' && Array.isArray(reply.data.children)) {
        // If it's a "more" type object with children, extract the children (comment IDs)
        const moreCommentIds = reply.data.children.map((child) => child);
  
        commentIds.push(...moreCommentIds);
      } else if (Array.isArray(reply)) {
        // If it's an array, recursively check each element
        reply.forEach((item) => traverse(item));
      } else if (typeof reply === 'object') {
        // If it's an object, recursively check its properties
        Object.values(reply).forEach((value) => traverse(value));
      }
    }
  
    // Start the traversal with the response reply
    traverse(reply);
  
    // Convert the extracted comment IDs to a comma-delimited string
    const commaDelimitedIds = commentIds.join(',');
  
    return commaDelimitedIds;
  };
  