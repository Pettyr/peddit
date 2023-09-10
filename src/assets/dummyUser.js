// Sample User Data
const dummyUser = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    joinDate: '2023-01-15', // Date joined
    posts: [
      {
        id: 101,
        title: 'My First Post',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod eros nec sapien faucibus, in tristique justo mattis.',
        date: '2023-01-20',
        comments: [
          {
            id: 201,
            author: 'jane_smith',
            content: 'Great post!',
          },
          {
            id: 202,
            author: 'mark_johnson',
            content: 'I agree!',
          },
        ],
      },
      {
        id: 102,
        title: 'React Redux Tutorial',
        content:
          'In this tutorial, we will learn how to use React Redux to manage state in a React application.',
        date: '2023-02-10',
        comments: [
          {
            id: 203,
            author: 'sara_wilson',
            content: 'Very informative!',
          },
          {
            id: 204,
            author: 'david_brown',
            content: 'Thanks for sharing!',
          },
        ],
      },
      // Add more posts as needed
    ],
  };
  
  export default dummyUser;
  