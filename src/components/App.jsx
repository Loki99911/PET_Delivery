// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Shop } from './Shop/Shop';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import restaurantsData from '../data/restaurants.json';
import React from 'react';
import { RestMenu } from './RestMenu/RestMenu';

const ShopContext = React.createContext();
export const App = () => {
  // const [restaurants, setRestaurants] = useState([]);
  // useEffect(() => {
  //   setRestaurants(restaurantsData);
  // }, []);
// const [selectedRest, setSelectedRest] = useState(
//   restaurantsData.restaurants[0].restaurantName
// );

  return (
    <ShopContext.Provider value={restaurantsData}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="main" element={<Shop/>}>
            <Route
              path={`:activeRestName`}
              element={<RestMenu />}
            />
          </Route>
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </ShopContext.Provider>
  );
};

export { ShopContext };
