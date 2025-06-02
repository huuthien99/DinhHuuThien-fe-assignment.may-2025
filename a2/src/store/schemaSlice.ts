import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SchemaState {
  text: string;
  sampleData: string;
}

const initialState: SchemaState = {
  text: "",
  sampleData: `{
  "title": "Form",
  "fields": [
    { "type": "text", "label": "Họ và tên", "name": "fullName", "required": true },
    { "type": "email", "label": "Email", "name": "email", "required": true },
    {
      "type": "radio",
      "label": "Giới tính",
      "name": "gender",
      "options": ["Nam", "Nữ", "Khác"]
    },
    {
      "type": "select",
      "label": "Tỉnh/Thành phố",
      "name": "province",
      "options": [{"key": "1", "value": "Hà Nội"}, {"key": "2", "value": "Đà Nẵng"}, {"key": "3", "value": "TP HCM"}]
    },
    { "type": "vietnamAddress", "label": "Địa chỉ", "name": "address" }
  ]
}`,
};

const schemaSlice = createSlice({
  name: "schema",
  initialState,
  reducers: {
    setSchemaText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    resetSchema: (state) => {
      state.text = "";
    },
  },
});

export const { setSchemaText, resetSchema } = schemaSlice.actions;
export default schemaSlice.reducer;
