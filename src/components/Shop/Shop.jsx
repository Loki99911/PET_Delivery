import { ShopContext } from 'components/App';
import { RestList } from 'components/RestList/RestList';
import { useContext} from 'react';
import { ShopWrapper } from './Shop.styled';
import { Outlet } from 'react-router-dom';

export const Shop = () => {
  const { restaurants } = useContext(ShopContext);
  
  const restNames = restaurants.map(restaurant => restaurant.restaurantName);
  return (
    <ShopWrapper>
      <RestList restNames={restNames}/>
      <Outlet/>
    </ShopWrapper>
  );
};
