import React from "react";
import { Chart } from "react-google-charts";
import './index.css'
export const data = [
  ["Total Products", "Hours per Day"],
  ["Basic Tees 55%",22],
  ["Customer Shot pants 31%",12.199999999],
  ["Super Hoodies 14%",5.6],
 
];


const Piechart=()=> {
    const options = {
        title: "Total Products",
      }
  return (
    <div className="pie-container">
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default Piechart