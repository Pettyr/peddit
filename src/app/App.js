import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';

import AppLayout from "./AppLayout";
import CommentList from "../components/CommentList";
import Post from "../components/Post";
import CreatePost from "../components/CreatePostForm";
import PostList from "../components/PostList";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AppLayout />}>
          <Route path="/comments" element={<CommentList />} />
          <Route path="/posts-list" element={<PostList />} />
          <Route path="/posts-list/:postID" element={<Post />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;