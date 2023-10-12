import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookingsReducer from "@/lib/features/bookingSlice";
import hotelsReducer from "@/lib/features/hotelSlice";
import usersReducer from "@/lib/features/userSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  booking: bookingsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
