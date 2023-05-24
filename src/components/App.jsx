// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Shop } from './Shop/Shop';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';

export const App = () => {
  // useEffect({}, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Shop />} >

        </Route>
        <Route path="cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};
