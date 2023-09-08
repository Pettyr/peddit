import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postSLice';
import commentsReducer from '../features/comments/commentSlice';
import usersReducer from '../features/users/userSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
    reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
    auth: authReducer,
    },
});


export default store;
