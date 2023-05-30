// import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Shop } from './Shop/Shop';
// import restaurantsData from '../data/restaurants.json';
import React, { useEffect, useState } from 'react';
import { RestMenu } from './RestMenu/RestMenu';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import axios from 'axios';
import HistoryPage from './HistoryPage/HistoryPage';
axios.defaults.baseURL = 'https://delivery-api-d9rc.onrender.com';
const ShopContext = React.createContext();
const MealsContext = React.createContext();
export const App = () => {
  const [shops, setShops] = useState([]);
  const [meals, setMeals] = useState([]);
  const [currentRest, setCurrentRest] = useState('');

  useEffect(() => {
    axios
      .get('/api/shopsList')
      .then(function (response) {
        setShops(response.data.data.result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  useEffect(() => {
    const currentStorageMeals = JSON.parse(localStorage.getItem('meals'));
    const currentStorageRest = JSON.parse(
      localStorage.getItem('activeRestaurant')
    );
    
    if (currentStorageRest) {
      setCurrentRest(currentStorageRest);
    }

    if (currentStorageMeals) {
      setMeals(currentStorageMeals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  if (shops.length === 0) return;

  return (
    <ShopContext.Provider value={{ shops, setShops }}>
      <MealsContext.Provider value={{ meals, setMeals }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="main" />} />
            <Route path="main" element={<Shop />}>
              <Route index element={<Navigate to={currentRest} />} />
              <Route path={`:activeRestName`} element={<RestMenu />} />
            </Route>
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="history" element={<HistoryPage />} />
          </Route>
        </Routes>
      </MealsContext.Provider>
    </ShopContext.Provider>
  );
};

export { ShopContext, MealsContext };
