import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Payload = {
  name: string;
  age: number | string;
  date: string;
  gender: string;
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: [] as Payload[],
  reducers: {
    addAppointment: (state, action: PayloadAction<Payload>) => {
      state.push(action.payload);
    },
  },
});

export const { addAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
