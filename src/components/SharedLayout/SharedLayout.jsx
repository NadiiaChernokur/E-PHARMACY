import { Suspense, useEffect } from 'react';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const location = useLocation();

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <Footer />
      )}
    </>
  );
};

export default SharedLayout;
