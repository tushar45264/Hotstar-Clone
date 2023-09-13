import{ configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import  userReducer  from '../features/users/userslice';
import movieReducer from '../features/Movies/movieSlice';
export default configureStore({
    reducer: {
        user:userReducer,
        movie:movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});