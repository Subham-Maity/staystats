import axios from "@/utils/axios";
import { BookingData } from "@/lib/Types/Dashboard/types";
export function fetchBookingData(): Promise<{ data: BookingData }> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/booking`);
      const data = await response.data;
      resolve({ data });
    } catch (error) {
      console.error("Error fetching booking data: ", error);
      reject(error);
    }
  });
}
