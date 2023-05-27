// import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Shop } from './Shop/Shop';
import restaurantsData from '../data/restaurants.json';
import React, { useEffect, useState } from 'react';
import { RestMenu } from './RestMenu/RestMenu';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const ShopContext = React.createContext();
const MealsContext = React.createContext();
export const App = () => {
  const [shops, setShops] = useState(restaurantsData);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const currentStorage = JSON.parse(localStorage.getItem('meals'));
    if (currentStorage) {
      setMeals(currentStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  return (
    <ShopContext.Provider value={{ shops, setShops }}>
      <MealsContext.Provider value={{ meals, setMeals }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="main" />} />
            <Route path="main" element={<Shop />}>
              <Route
                index
                element={<Navigate to={shops.restaurants[0].restaurantName} />}
              />
              <Route path={`:activeRestName`} element={<RestMenu />} />
            </Route>
            <Route path="cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </MealsContext.Provider>
    </ShopContext.Provider>
  );
};

export { ShopContext, MealsContext };
