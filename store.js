import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import bookingReducer from "./features/bookingSlice";
import ticketReducer from "./features/ticketSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    ticket: ticketReducer,
  },
});
