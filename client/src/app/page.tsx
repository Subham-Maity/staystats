import Image from "next/image";
import Table from "@/components/Table/Table";

export default function Home() {
    const userData = [
        {
            name: "John Doe",
            phone: "123-456-7890",
            email: "john@example.com",
            hotel: "Example Hotel",
        },
        {
            name: "Jane Smith",
            phone: "987-654-3210",
            email: "jane@example.com",
            hotel: "Another Hotel",
        },
        // Add more data items as needed
    ];
  return (
    <div className="dark:text-red-900 mx-auto flex gap-4 flex-col">
      <div className="flex w-full flex-col justify-center gap-4 items-center">
        <h1 className="text-2xl font-bold">User Details</h1>
        <div className="flex w-full">
         <Table userData={userData} />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-4 items-center">
        <h1 className="text-2xl font-bold">Booking Details</h1>
        <div className="flex w-full">
            <Table userData={userData} />
        </div>
      </div>
    </div>
  );
}
