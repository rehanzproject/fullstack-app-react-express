import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./exampleData";
import { BarChart } from "../../molecule/BarChart/BarChart.molecule";
Chart.register(CategoryScale);

export default function ChartAdmin() {
  const data = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#3C50E0"],
        borderRadius: "25px 15px",
      },
    ],
  };
  const [chartData, setChartData] = useState(data);

  return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
  );
}
