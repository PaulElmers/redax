import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.date !== action.payload.date
      );
    },
  },
});

export const { addEvent, removeEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
