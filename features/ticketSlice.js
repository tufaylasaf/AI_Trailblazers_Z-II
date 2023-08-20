import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket1Time: "",
  ticket2Time: "",
  price: 0,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicket(state, action) {
      state.ticket1Time = action.payload._ticket1Time;
      state.ticket2Time = action.payload._ticket2Time;
      state.price = action.payload._price;
    },
  },
});

export const { setTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
