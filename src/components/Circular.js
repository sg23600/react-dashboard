import React, { Component } from "react"
import { Doughnut } from "react-chartjs-2"

class Circular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      circData: {
        labels: ["deposit", "expense"],
        datasets: [
          {
            label: "Points",
            data: [75, 25],
            backgroundColor: [
              "rgba(62,173,76, 0.6)",
              "rgba(150, 38, 158, 0.6)",
            ],
            borderColor: ["rgba(62,173,76, 1)", "rgba(150, 38, 158, 1)"],
            borderWidth: "5px",
            width: "6px",
          },
        ],
      },
    }
  }

  render() {
    return (
      <Doughnut
        data={this.state.circData}
        options={{
          title: {
            display: true,
            text: "Earning in Month",
            fontSize: 25,
          },
          legend: {
            display: false,
          },
          cutoutPercentage: 80,
        }}
      />
    )
  }
}

export default Circular
