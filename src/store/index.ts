import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../reducers/buttonReducer";

const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
