import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'Guest', 'User'],
  ["Week 1", 6, 0],
  ["", 3, 5],
  ["Week 2",9, 15],
  ["", 11, 9],
  ["", 6, 10],
  ["Week 3", 4, 5],
  ["", 14, 3],
  ["Week 4", 4, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Quantity',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class Rechart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Activity</h2>
        <Chart
          width={'700px'}
          height={'410px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default Rechart