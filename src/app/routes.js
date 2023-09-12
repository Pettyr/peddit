const ROUTES = {
    commentsRoute: (subreddit, id, title) => `/r/${subreddit}/comments/${id}/${title}`,
    postListRoute: () => "/posts-list",
  };
  
  export default ROUTES;
  