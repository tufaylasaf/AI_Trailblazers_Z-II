import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "", SID: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.username;
      state.SID = action.payload.sid;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
