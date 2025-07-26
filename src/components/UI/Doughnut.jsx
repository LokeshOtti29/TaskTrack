import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnutchart = ({ status, color }) => {
  const data = {
    labels: [status, "Remaining"],
    datasets: [
      {
        label: "Task Status",
        data: [300, 100],
        backgroundColor: [color, "rgba(155, 154, 154, 0.6)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "dot",
          boxWidth: 8,
          boxHeight: 8,
          padding: 10,
          filter: (item) => item.index === 0,
        },
      },
    },
  };

  return (
    <div style={{ width: "22vw", height: "22vh" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Doughnutchart;
