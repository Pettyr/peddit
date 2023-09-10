import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';

import AppLayout from "./AppLayout";
import Post from "../components/FullPost";
import CreatePost from "../components/CreatePostForm";
import PostList from "../features/postsList/PostsList";
import UserProfile from "../components/UserProfile";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AppLayout />}>
          <Route path="/posts-list" element={<PostList />} />
          <Route path="/posts-list/:postId" element={<Post />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;