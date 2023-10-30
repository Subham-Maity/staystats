import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "@/lib/features/bookingSlice";
import hotelsReducer from "@/lib/features/hotelSlice";
import usersReducer from "@/lib/features/userSlice";

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    booking: bookingsReducer,
    hotels: hotelsReducer,
    users: usersReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;