import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
  value: number,
}

const initialValue: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
