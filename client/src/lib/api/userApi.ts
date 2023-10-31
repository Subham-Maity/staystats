import axios from "@/utils/axios";
import { UserData } from "@/lib/Types/Dashboard/types";
export function userApi(): Promise<{ data: any }> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("http://localhost:5000/data/users");
      const data = await response.data;
      console.log(data, "data");
      resolve({ data });
    } catch (error) {
      console.error("Error fetching booking data: ", error);
      reject(error);
    }
  });
}
