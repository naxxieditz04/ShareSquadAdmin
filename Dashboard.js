import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>Dashboard</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Welcome to Admin Panel</h5>
            <p className="card-text">
              Manage all submitted group links from here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
