
export default function extractMoreCommentIds(comment) {
    const commentIds = [];
  
    // Recursively traverse the response comment
    function traverse(comment) {
      if (!comment) {
        return;
      }
  
      if (comment.kind === 'more' && Array.isArray(comment.data.children)) {
        // If it's a "more" type object with children, extract the children (comment IDs)
        const moreCommentIds = comment.data.children.map((child) => child);
  
        commentIds.push(...moreCommentIds);
      } else if (Array.isArray(comment)) {
        // If it's an array, recursively check each element
        comment.forEach((item) => traverse(item));
      } else if (typeof comment === 'object') {
        // If it's an object, recursively check its properties
        Object.values(comment).forEach((value) => traverse(value));
      }
    }
  
    // Start the traversal with the response comment
    traverse(comment);
  
    // Convert the extracted comment IDs to a comma-delimited string
    const commaDelimitedIds = commentIds.join(',');
  
    return commaDelimitedIds;
  };
  