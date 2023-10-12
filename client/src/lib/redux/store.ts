import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookingsReducer from "@/lib/features/bookingSlice";
import hotelsReducer from "@/lib/features/hotelSlice";
import usersReducer from "@/lib/features/userSlice";


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  booking: bookingsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    booking: bookingsReducer,
    hotels: hotelsReducer,
    userReducer: usersReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
