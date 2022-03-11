import * as React from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface StateData {
  maxValue: number;
  data: Array<any>;
  fullData: Array<any>;
}

const keys: Array<string> = ["rtk-ag", "pcr"];

class TestsComponent extends React.Component {
  state: StateData = {
    maxValue: 0,
    data: [],
    fullData: [],
  };

  componentDidMount() {
    Papa.parse(
      "https://cdn.jsdelivr.net/gh/MoH-Malaysia/covid19-public@main/epidemic/tests_malaysia.csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          let newData: Array<any> = results.data.slice(
            results.data.length - 29,
            results.data.length - 1
          );
          let maxValue = 0;
          for (let i = 0; i < newData.length; i++) {
            maxValue = Math.max(parseInt(newData[i]["rtk-ag"]), maxValue);
            maxValue = Math.max(parseInt(newData[i]["pcr"]), maxValue);
          }
          this.setState({
            fullData: results.data,
            data: newData,
            maxValue: maxValue,
          });
        },
      }
    );
  }

  componentWillUnmount() {}

  render() {
    return (
      <div style={{ padding: 32 }}>
        <ResponsiveContainer width="95%" height={512}>
          <LineChart data={this.state.data}>
            <Line type="monotone" dataKey="rtk-ag" stroke="red" />
            <Line type="monotone" dataKey="pcr" stroke="blue" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis
              type="number"
              dataKey="rtk-ag"
              domain={[0, this.state.maxValue]}
            />
            <YAxis
              type="number"
              dataKey="pcr"
              domain={[0, this.state.maxValue]}
            />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const TestsPage = () => {
  return (
    <main>
      <TestsComponent />
    </main>
  );
};

export default TestsPage;
