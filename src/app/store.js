import { configureStore } from '@reduxjs/toolkit';

import postsListReducer from '../features/postsList/postsListSLice';
import commentsReducer from '../features/comments/commentsSlice';
import searchResultsReducer from '../features/search/searchResultsSlice';

const store = configureStore({
    reducer: {
        postsList: postsListReducer,
        comments: commentsReducer,
        searchResults: searchResultsReducer
    },
});


export default store;


/*import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // You may need middleware for async actions
import rootReducer from './reducers'; // Combine your reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
*/