"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormState = {
  data: Record<string, any>;
};

const initialState: FormState = {
  data: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setField(state, action: PayloadAction<{ key: string; value: any }>) {
      state.data[action.payload.key] = action.payload.value;
    },
    resetForm(state) {
      state.data = {};
    },
  },
});

export const { setField, resetForm } = formSlice.actions;
export default formSlice.reducer;
