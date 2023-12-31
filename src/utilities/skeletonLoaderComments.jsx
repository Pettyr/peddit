
import React from 'react';
import './skeletonLoaderComments.css'; // Import your CSS for styling

const SkeletonLoader = ({ count }) => {
  const skeletonItems = [];

  for (let i = 0; i < count; i++) {
    skeletonItems.push(
      <div class="comments-list">
          <div class="movie--isloading">
            <div class="loading-image"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
              <div class="loading-btn"></div>
            </div>
          </div>
        </div>
    );
  }

  return <div className="container">{skeletonItems}</div>;
};

export default SkeletonLoader;
