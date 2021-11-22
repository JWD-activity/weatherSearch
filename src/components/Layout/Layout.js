import React from 'react';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';

function Layout({ children }) {
  return (
    <Container>
      <header></header>
      <main>{children}</main>
      <Footer author='Jinok' />
    </Container>
  );
}

export default Layout;
