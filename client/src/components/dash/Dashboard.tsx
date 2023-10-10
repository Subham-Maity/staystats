import ChartBox from "@/components/dash/Components/ChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "./data";
import TailwindWrapper from "@/components/dash/Components/TailwindWrapper";

const Dashboard = () => {
  return <>
    <div>
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 ">
      <TailwindWrapper className={'mt-5'}>
        <ChartBox {...chartBoxUser} />
      </TailwindWrapper>

      <TailwindWrapper className={'mt-5'}>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
      </TailwindWrapper>

      <TailwindWrapper className={'mt-5'}>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
      </TailwindWrapper>

      <TailwindWrapper className={'mt-5'}>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
      </TailwindWrapper>

      <TailwindWrapper className={'mt-5'}>
        <ChartBox {...chartBoxUser} />
      </TailwindWrapper>

      <TailwindWrapper className={'mt-5'}>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
      </TailwindWrapper>

      <TailwindWrapper className={'mt-5'}>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
      </TailwindWrapper>

      <TailwindWrapper className={'mt-5'}>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
      </TailwindWrapper>
    </div>
    </div>
  </>;
};

export default Dashboard;
