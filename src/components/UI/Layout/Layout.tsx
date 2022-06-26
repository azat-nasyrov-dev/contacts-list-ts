import React, { ReactElement } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import AppToolbar from '../AppToolbar/AppToolbar';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
