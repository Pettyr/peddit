import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';

import AppLayout from "./AppLayout";
import PostList from "../features/postsList/PostsList";
import Comments from "../features/comments/Comments";
import SearchResults from "../features/search/SearchResults";

function App() {
  const basename = "/peddit"
  return (
    <BrowserRouter basename={basename}>
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PostList />} />
          <Route path="/posts-list" element={<PostList />} />
          <Route path="/r/:subreddit/comments/:postId" element={<Comments />} />
          <Route path="/search" element={<SearchResults />} /> 
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;