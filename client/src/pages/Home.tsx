import React from 'react';
import Header from '../components/header/Header';
import UsersTable from '../components/usersTable/UsersTable';

const Home: React.FC = () => (
  <div>
    <Header title="User display" />
    <UsersTable />
  </div>
);

export default Home;
