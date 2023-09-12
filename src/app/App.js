import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';

import AppLayout from "./AppLayout";
import PostList from "../features/postsList/PostsList";
import Comments from "../features/comments/Comments";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AppLayout />}>
          <Route path="/posts-list" element={<PostList />} />
          <Route path="/r/:subreddit/comments/:postId/:title" element={<Comments />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;