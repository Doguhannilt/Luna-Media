import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  default: "login"
};

const isLogged = createSlice({
  name: 'LoginorSignup',
  initialState,
  reducers: {
    setState: (state) => {
        state.default = state.default === 'login' ? 'signup' : 'login';
    }
  }
});

export const { setState } = isLogged.actions;
export default isLogged.reducer;
