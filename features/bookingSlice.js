import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRoundJourney: true,
  planetDeparture: "hello",
  planetArrival: "",
  dateDeparture: "",
  dateArrival: "",
  adultSID: [],
  childSID: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingDetails(state, action) {
      const {
        _isRoundJourney,
        _planetDeparture,
        _planetArrival,
        _dateDeparture,
        _dateArrival,
        _adultSID,
        _childSID,
      } = action.payload;
      state.isRoundJourney = _isRoundJourney;
      state.planetDeparture = _planetDeparture;
      state.planetArrival = _planetArrival;
      state.dateArrival = _dateArrival;
      state.dateDeparture = _dateDeparture;
      state.adultSID = _adultSID;
      state.childSID = _childSID;
    },
  },
});

export const { setBookingDetails } = bookingSlice.actions;

export default bookingSlice.reducer;
