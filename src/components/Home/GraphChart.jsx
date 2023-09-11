import React, { useState } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

const GraphChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Income",
        data: [31, 40, 60, 50, 100, 150, 180, 200],
      },
      {
        name: "Expenses",
        data: [11, 32, 50, 20, 80, 120, 150, 180],
      },
    ],
    options: {
      chart: {
        foreColor: "#ffffff",
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        // colors: ["#F44336", "#E91E63", "#9C27B0"],
      },

      colors: ["#f75757", "#fa9441"],

      xaxis: {
        type: "datetime",
        categories: [
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
        ],
      },
      grid: {
        borderColor: "",
      },
      legend: {
        show: true,
        position: "top",
        // horizontalAlign: "right",
      },
    },
  });

  return (
    <div>
      <p>Earning Graph</p>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default GraphChart;

/* class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    
  }
} */
