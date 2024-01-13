import {createSlice} from '@reduxjs/toolkit'



const initialState = {
  isCopied: false
}

const counterSlice = createSlice({
  name: 'iscopied',
  initialState,
  reducers:{
    isTrue(state) {
      state.isCopied = true
    }
  }
})

export const {isTrue} = counterSlice.actions
export default counterSlice.reducer