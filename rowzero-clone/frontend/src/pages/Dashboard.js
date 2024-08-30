import React from 'react';
import Spreadsheet from '../components/Spreadsheet';
import Connection from '../components/Connection';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>RowZero Clone Dashboard</h1>
      <Connection />
      <Spreadsheet />
    </div>
  );
};

export default Dashboard;