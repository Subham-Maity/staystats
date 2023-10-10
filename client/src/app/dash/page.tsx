import React from "react";
import Dashboard from "@/components/dash/Dashboard";
import ChartComponent from "@/components/dash/Components/ChartBox";

const Page = () => {
  return (
    <div>
      <ChartComponent
        startTime={6565656}
        endTime={6565656}
        startPrice={145545}
        endPrice={14545}
      />
    </div>
  );
};

export default Page;
