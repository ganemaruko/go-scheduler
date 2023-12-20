import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductId } from "src/core/product";

type OrderSliceState = {
  orders: {
    [key in ProductId]: number;
  };
};

export type UpsertOrderPayload = {
  orderId: ProductId;
  quantity: number;
};

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: {},
  } as OrderSliceState,
  reducers: {
    // createOrder: (state, action) => {
    //   state.orders.push(action.payload);
    // },
    upsertOrder: (state, action: PayloadAction<UpsertOrderPayload>) => {
      const { orderId, quantity } = action.payload;
      if (state.orders[orderId]) {
        state.orders[orderId] += quantity;
      } else {
        state.orders[orderId] = quantity;
      }
    },
  },
});

export const { upsertOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
