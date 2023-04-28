import React from "react";
import "./Mutual.css";
import ApexCharts from "react-apexcharts";

class Mutual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [
            2206, 2192, 2057, 1972, 2054, 2404, 2360, 2854, 2943, 3267, 3579,
            4025,
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0,
          },
        },
        xaxis: {
          categories: [
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
        },
      },
      invested: 4390,
      currentValue: 4580,
      xirr: 7.30,
    };
  }

  render() {
    const {invested, currentValue, xirr } = this.state;

    return (
      <div className="mutual-funds-container">
        <div className="mutual-funds-info">
          <div className="mutual-funds-value">
            <span className="label">Current Value: </span>
            <span className="value">₹{currentValue}</span>
          </div>
          <div className="mutual-funds-value">
            <span className="label">Invested: </span>
            <span className="value">₹{invested}</span>
          </div>
          <div className="mutual-funds-value">
            <span className="label">XIRR: </span>
            <span className="value">{xirr}%</span>
          </div>
        </div>
        <ApexCharts
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
          width={700}
        />
      </div>
    );
  }
}

export default Mutual;
