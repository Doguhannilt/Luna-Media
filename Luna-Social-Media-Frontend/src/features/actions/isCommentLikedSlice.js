import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: 'gray'
}
const CommentlikeSlice = createSlice({
    name: 'islikedComment',
    initialState,
    reducers:{
        isLikedComment(state){
            
            state.color = state.color === "gray" ? "red" : "gray";
        }
    }
})

export const {isLikedComment} = CommentlikeSlice.actions
export default CommentlikeSlice.reducer