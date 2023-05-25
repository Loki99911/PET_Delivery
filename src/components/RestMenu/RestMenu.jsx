import { ShopContext } from 'components/App';
import { MealCard } from 'components/MealCard/MealCard';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

export const RestMenu = () => {
  const param = useParams();
  const { restaurants } = useContext(ShopContext);

  const restaurant = restaurants.find(
    rest => rest.restaurantName === param.activeRestName
  );
  const menu = restaurant.items;
  return (
    <ul>
      {menu.map(meal => (
        <MealCard prop={meal} key={restaurant.restaurantName +"_"+ meal.name} />
      ))}
    </ul>
  );
};
