const ROUTES = {
    commentsRoute: (subreddit, id) => `/r/${subreddit}/comments/${id}`,
    postListRoute: () => "/posts-list",
    searchResultsRoute: (queryString) => `/search?${queryString}`,
  };
  
  export default ROUTES;
  