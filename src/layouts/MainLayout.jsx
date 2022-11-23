import React from 'react';
import styled from 'styled-components';
import AsideMenu from '../components/AsideMenu';

const Layout = styled.section``;

export const MainLayout = ({ children }) => {
  return (
    <Layout>
      <AsideMenu />
      {children}
    </Layout>
  );
};

export default MainLayout;
