import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: 'gray'
}
const likeSlice = createSlice({
    name: 'isliked',
    initialState,
    reducers:{
        isLiked(state){
            
            state.color = state.color === "gray" ? "red" : "gray";
        }
    }
})

export const {isLiked} = likeSlice.actions
export default likeSlice.reducer