
import React from 'react';
import './skeletonLoaderPostsList.css'; // Import your CSS for styling

const SkeletonLoader = ({ count }) => {
  const skeletonItems = [];

  for (let i = 0; i < count; i++) {
    skeletonItems.push(
      <div class="col-sm-6 col-md-3">
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
