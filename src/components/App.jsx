import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('./Home/Home'));
const Registration = lazy(() => import('./Register/Register'));
const MedicineStore = lazy(() => import('./MedicineStore/MedicineStore'));
const Medicine = lazy(() => import('./Medicine/Medicine'));
const Product = lazy(() => import('./Drug/Drug'));
const Cart = lazy(() => import('./CartPage/CartPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/login" element={<Registration />}></Route>
            <Route path="/medicine-store" element={<MedicineStore />}></Route>
            <Route path="/medicine" element={<Medicine />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
