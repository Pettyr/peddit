import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/r/news">News</a>
        </li>
        <li>
          <a href="/r/programming">Programming</a>
        </li>
        <li>
          <a href="/r/movies">Movies</a>
        </li>
        {/* Add more subreddit links as needed */}
      </ul>
      <div className="sidebar-widgets">
        <div className="widget">
          <h4>Popular Subpeddits</h4>
          <ul>
            <li>
              <a href="/r/worldnews">World News</a>
            </li>
            <li>
              <a href="/r/technology">Technology</a>
            </li>
            <li>
              <a href="/r/gaming">Gaming</a>
            </li>
            {/* Add more popular subreddit links */}
          </ul>
        </div>
        <div className="widget">
          <h4>Community Rules</h4>
          <ul>
            <li>Be respectful to others</li>
            <li>No spam or self-promotion</li>
            <li>No hate speech or harassment</li>
            {/* Add more community rules */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
