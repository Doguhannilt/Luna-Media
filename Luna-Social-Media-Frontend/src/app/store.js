import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/actions/isCopiedSlice'
import likeReducer from "../features/actions/isLikedSlice";
import likeCommentReducer from '../features/actions/isCommentLikedSlice'
import LoggedReducer from '../features/actions/isSignuporLogin'


export const store = configureStore({
    reducer: {
        istrue:counterReducer,
        isliked:likeReducer,
        iscommentliked: likeCommentReducer,
        isloggedornot: LoggedReducer
    }
})
