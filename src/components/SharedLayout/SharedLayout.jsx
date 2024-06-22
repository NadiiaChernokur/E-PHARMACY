import { Suspense, useEffect } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
