import React from "react";
import "./Dash.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "29/03 - 04/04", Totla: 142 },
  { name: "05/04 - 11/04", Totla: 148 },
  { name: "12/01 - 18/04", Totla: 228 },
  { name: "19/04 - 25/04", Totla: 253 },
  { name: "36/04 - 02/05", Totla: 183 },
];

const Dash = () => {
  return (
    <div className="dash">
      <h1 className="Thongke">Thống kê</h1>

      <div className="Chart">
      <div>
      <div className="title">Doanh thu</div>
      <div className="lich"> </div>
      </div>
         


        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Totla"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="Group2"></div>

      <div className="Group3"></div>
    </div>
  );
};

export default Dash;
