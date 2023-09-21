import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../dummyData/models";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const searchedItem = state.items.find((i) => i.item.id === action.payload.item.id)
      if (searchedItem) {
        searchedItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeItemFromCart(state, action: PayloadAction<CartItem>) {
      state.items = state.items.filter(i => i.item.id !== action.payload.item.id)
    },
    reduceQuantity(state, action: PayloadAction<CartItem>) {
      const searchedItem = state.items.find((i) => i.item.id === action.payload.item.id)
      if (searchedItem) {
        if (searchedItem.quantity !== 1) {
          searchedItem.quantity -= 1
        } else {
          state.items = state.items.filter(i => i.item.id !== action.payload.item.id)
        }
      }
    },
  }
})

export const { addItemToCart, removeItemFromCart, reduceQuantity } = cartSlice.actions

export default cartSlice.reducer
