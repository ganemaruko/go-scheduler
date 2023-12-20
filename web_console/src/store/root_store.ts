import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { orderReducer } from "src/store/slices/order_slice";

export const rootStore = configureStore({
  reducer: {
    order: orderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;

/**
 * @link https://react-redux.js.org/using-react-redux/usage-with-typescript#define-typed-hooks
 */
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
