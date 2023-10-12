import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingApi } from "@/lib/api/bookingApi";
interface ProductState {
    status: "idle" | "loading";
    bookings: any[];
}

const initialState: ProductState = {
    status: "idle",
    bookings: [],
}

export const fetchAllBookingsAsync = createAsyncThunk(
    "bookingsSlice/fetchAllBookings",
    async () => {
        try {
            const response = await bookingApi();
            return response.data;
        } catch (error) {
            console.error("Error fetching bookings:", error);
            throw error; // Rethrow the error for the component to handle
        }
    }
);


export const bookingSlice = createSlice({
    name: "bookingsSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBookingsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllBookingsAsync.fulfilled, (state, action) => {
                state.status = "idle";
                //@ts-ignore
                state.bookings = action.payload;
            })
    },
});

export const selectAllbookings = (state: any) => state.booking.bookings;

export default bookingSlice.reducer;