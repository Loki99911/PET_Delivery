import { ShopContext } from 'components/App';
import { MealCard } from 'components/MealCard/MealCard';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MenuWrapper } from './RestMenu.styled';

export const RestMenu = () => {
  const param = useParams();
  const { restaurants } = useContext(ShopContext);

  const restaurant = restaurants.find(
    rest => rest.restaurantName === param.activeRestName
  );
  const menu = restaurant.items;
  return (
    <MenuWrapper>
      {menu.map(meal => (
        <MealCard prop={meal} key={restaurant.restaurantName +"_"+ meal.name} />
      ))}
    </MenuWrapper>
  );
};
