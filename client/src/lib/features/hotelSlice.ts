import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hotelApi } from "@/lib/api/hotelApi";
interface ProductState {
    status: "idle" | "loading";
    hotels: any[];
}

const initialState: ProductState = {
    status: "idle",
    hotels: [],
}

export const fetchAllHotelsAsync = createAsyncThunk(
    "bookingsSlice/fetchAllBookings",
    async () => {
        try {
            const response = await hotelApi();
            return response.data;
        } catch (error) {
            console.error("Error fetching bookings:", error);
            throw error; // Rethrow the error for the component to handle
        }
    }
);


export const hotelSlice = createSlice({
    name: "bookingsSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder:any) => {
        builder
            .addCase(fetchAllHotelsAsync.pending, (state:any) => {
                state.status = "loading";
            })
            .addCase(fetchAllHotelsAsync.fulfilled, (state:any, action:any) => {
                state.status = "idle";
                //@ts-ignore
                state.bookings = action.payload;
            })
    },
});
export const selectAllhotels = (state: any) => state.booking.bookings;

export default hotelSlice.reducer;