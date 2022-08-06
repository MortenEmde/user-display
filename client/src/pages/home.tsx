import React from 'react';
import Header from '../components/Header';
import UsersTable from '../components/UsersTable';

const Home: React.FC = () => (
  <div>
    <Header title="User display" />
    <UsersTable />
  </div>
);

export default Home;
