import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingApi } from "@/lib/api/bookingApi";
interface ProductState {
    status: "idle" | "loading";
    users: any[];
}

const initialState: ProductState = {
    status: "idle",
    users: [],
}

export const fetchAllUsersAsync = createAsyncThunk(
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
    extraReducers: (builder:any) => {
        builder
            .addCase(fetchAllUsersAsync.pending, (state:any) => {
                state.status = "loading";
            })
            .addCase(fetchAllUsersAsync.fulfilled, (state:any, action:any) => {
                state.status = "idle";
                //@ts-ignore
                state.bookings = action.payload;
            })
    },
});
export const selectAllUsers = (state: any) => state.booking.bookings;

export default bookingSlice.reducer;