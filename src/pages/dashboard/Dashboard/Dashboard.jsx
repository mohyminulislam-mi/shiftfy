import React from "react";
import StatCard from "../../../components/StatCard";
import Chart from "../../../components/Chart";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="To Pay" value="129" />
        <StatCard title="Ready Pick UP" value="1,325" />
        <StatCard title="In Transit" value="50" />
        <StatCard title="Ready to Deliver" value="50" />
        <StatCard title="Delivered" value="50" />
      </div>
      <Chart />
    </div>
  );
};

export default Dashboard;
