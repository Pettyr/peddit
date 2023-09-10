import React from 'react';
import './UserProfile.css'
import dummyUser from '../assets/dummyUser';
import { Link } from 'react-router-dom'

function UserProfile() {
  const user = dummyUser;

  return (
    <div className="user-profile">
      <div className="user-info">
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Joined: {user.joinDate}</p>
        <button>Edit Profile</button>
      </div>
      <div className="user-posts">
        <h3>Posts by {user.username}</h3>
        <ul className="post-list">
          {/* Render user's posts with titles and links */}
          {user.posts.map((post) => (
            <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p> {/* Render post content */}
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;