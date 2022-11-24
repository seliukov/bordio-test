import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';

const Layout = styled.section``;

export const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <ToolsBar />
      <Header />
      {children}
    </Layout>
  );
};

export default MainLayout;
