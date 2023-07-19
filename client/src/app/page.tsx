import Image from "next/image";
import Table from "@/components/Table/Table";

export default function Home() {
  return (
    <div className="dark:text-red-900 mx-auto flex gap-4 flex-col">
      <div className="flex w-full flex-col justify-center gap-4 items-center">
        <h1 className="text-2xl font-bold">User Details</h1>
        <div className="flex w-full">
          <Table />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-4 items-center">
        <h1 className="text-2xl font-bold">Booking Details</h1>
        <div className="flex w-full">
          <Table />
        </div>
      </div>
    </div>
  );
}
