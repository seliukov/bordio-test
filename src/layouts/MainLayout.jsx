import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';

const Layout = styled.section``;

export const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <ToolsBar />
      {children}
    </Layout>
  );
};

export default MainLayout;
