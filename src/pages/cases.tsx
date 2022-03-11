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
  selectedKey: string;
  data: Array<any>;
  fullData: Array<any>;
}

const keys: Array<string> = [
  "cases_new",
  "cases_import",
  "cases_recovered",
  "cases_active",
  "cases_cluster",
  "cases_unvax",
  "cases_pvax",
  "cases_fvax",
  "cases_boost",
  "cases_child",
  "cases_adolescent",
  "cases_adult",
  "cases_elderly",
  "cases_0_4",
  "cases_5_11",
  "cases_12_17",
  "cases_18_29",
  "cases_30_39",
  "cases_40_49",
  "cases_50_59",
  "cases_60_69",
  "cases_70_79",
  "cases_80",
  "cluster_import",
  "cluster_religious",
  "cluster_community",
  "cluster_highRisk",
  "cluster_education",
  "cluster_detentionCentre",
  "cluster_workplace",
];

class CasesComponent extends React.Component {
  state: StateData = {
    maxValue: 0,
    selectedKey: keys[0],
    data: [],
    fullData: [],
  };

  handleDropdown = (key: any) => {
    let maxValue = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      maxValue = Math.max(parseInt(this.state.data[i][key]), maxValue);
    }
    this.setState({
      maxValue: maxValue,
      selectedKey: key,
    });
  };

  componentDidMount() {
    Papa.parse(
      "https://cdn.jsdelivr.net/gh/MoH-Malaysia/covid19-public@main/epidemic/cases_malaysia.csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          this.setState({
            fullData: results.data,
            data: results.data.slice(
              results.data.length - 29,
              results.data.length - 1
            ),
          });
        },
      }
    );
  }

  componentWillUnmount() {}

  render() {
    return (
      <div style={{ padding: 32 }}>
        <Dropdown onSelect={this.handleDropdown}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {this.state.selectedKey}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ maxHeight: 320, overflowY: "auto" }}>
            {keys.map((key) => {
              return <Dropdown.Item eventKey={key}>{key}</Dropdown.Item>;
            })}
          </Dropdown.Menu>
        </Dropdown>
        <ResponsiveContainer width="95%" height={512}>
          <LineChart data={this.state.data}>
            <Line
              type="monotone"
              dataKey={this.state.selectedKey}
              stroke="#8884d8"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis type="number" domain={[0, this.state.maxValue]} />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const CasesPage = () => {
  return (
    <main>
      <CasesComponent />
    </main>
  );
};

export default CasesPage;
