import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePostForm.css';

function CreatePostForm() {
    const [formData, setFormData] = useState({
      title: '',
      author: '',
      content: '',
    });
  
    const navigate = useNavigate();
  
    // Define a function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Post Submission Successfil!')
      // Perform form submission logic here
      // For example, you can send the form data to an API
      // After successful submission, navigate to a different route
      navigate('/posts-list'); // Redirect to the post list page
    };
  
    // Define a function to handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
        <div className="create-post-form">
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );      
  }
  
  export default CreatePostForm;
  