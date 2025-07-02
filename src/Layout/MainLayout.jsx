import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/navbar/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <main><Outlet/></main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;