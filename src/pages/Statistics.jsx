import { useEffect } from "react";
import DashHero from "../components/DashHero";
import ChartBarShow from "../components/ChartBarShow";
import { useLoaderData } from "react-router-dom";
import ChartLineShow from "../components/ChartLineShow";

const Statistics = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = "Statistics | Gadget Mart";
  }, []);
  return (
    <div>
      <DashHero
        title={"Unlock Insights with Real-Time Statistics"}
        description={
          "Explore data-driven trends and analytics with interactive charts and reports. Gain valuable insights to make informed decisions effortlessly."
        }
      ></DashHero>
      <ChartBarShow data={data}></ChartBarShow>
      <ChartLineShow data={data}></ChartLineShow>
    </div>
  );
};

export default Statistics;
