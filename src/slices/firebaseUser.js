import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
};

export const firebaseUser = createSlice({
    name: "firebaseUser",
    initialState,
    reducers: {
      //This is where actions exist
      setUser: (state, action) => {
          state = action.payload
      },
    },
});

export const selectState = (state) => state;
//export const selectUserName = (state) => state.username;

export default firebaseUser.reducer;