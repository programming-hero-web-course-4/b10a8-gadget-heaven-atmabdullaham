import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartLineShow = ({ data }) => {
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-300px)] py-16">
      <div className="hero-content flex-col lg:flex-row-reverse  gap-10 lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl  font-bold">
            Revenue Trends - Line Chart
          </h1>
          <p className="py-6">
            Analyze revenue growth over time with our interactive line chart.
            Gain insights into sales patterns and identify key trends to
            optimize business strategy.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="h-72 w-full">
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart width={500} height={400} data={data}>
                  <Line
                    type="monotone"
                    dataKey={"revenue"}
                    stroke="#8884d8"
                  ></Line>
                  <XAxis dataKey={"category"}></XAxis>
                  <YAxis></YAxis>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartLineShow;
