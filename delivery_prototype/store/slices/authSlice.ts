import { createSlice } from "@reduxjs/toolkit"

export interface User {
  name: string,
  email: string,
  phoneNumber: string,
}


const initialState: User = {
  name: "",
  email: "",
  phoneNumber: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  }
})

