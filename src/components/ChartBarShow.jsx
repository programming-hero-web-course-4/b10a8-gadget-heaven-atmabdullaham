import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartBarShow = ({ data }) => {
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-300px)] py-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl  font-bold">
            Product Performance - Bar Chart
          </h1>
          <p className="py-6">
            Visualize and compare the sales performance of different products
            with a clear, easy-to-understand bar chart. Track the best-selling
            items and make data-driven decisions.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="h-72 w-full">
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart width={1000} height={250} data={data}>
                  <XAxis dataKey={"category"}></XAxis>
                  <YAxis></YAxis>
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="units_sold" fill="#" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBarShow;
