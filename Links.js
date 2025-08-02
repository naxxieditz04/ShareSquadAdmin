import React from 'react';
import Header from '../components/Header';
import LinkTable from '../components/LinkTable';

const Links = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Manage Links</h2>
        </div>
        <LinkTable />
      </div>
    </div>
  );
};

export default Links;
