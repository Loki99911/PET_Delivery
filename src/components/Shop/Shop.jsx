import { ShopContext } from 'components/App';
import { RestList } from 'components/RestList/RestList';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

export const Shop = () => {
  const { shops } = useContext(ShopContext);

  const restNames = shops.map(restaurant => restaurant.restaurantName);
  return (
    <>
      <RestList restNames={restNames} />
      <Outlet />
    </>
  );
};
