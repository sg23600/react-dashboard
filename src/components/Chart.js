import React, { Component } from "react"
import { Line } from "react-chartjs-2"

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "2018",
            data: [200, 120, 140, 200, 250, 230, 180, 150, 140, 135, 180, 230],
            backgroundColor: "rgba(161, 237, 170, 0.6)",
            borderColor: "rgba(62,173,76, 1)",
          },
        ],
      },
    }
  }

  render() {
    return (
      <Line
        //style={this.lineStyle}
        data={this.state.chartData}
        options={{
          title: {
            display: true,
            text: "Statistics",
            fontSize: 25,
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  beginAtZero: true,
                  stepSize: 100,
                  max: 500,
                },
              },
            ],
          },
        }}
      />
    )
  }
}

export default Chart
