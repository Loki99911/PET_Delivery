import { MealsContext } from 'components/App';
import {
  CardBtn,
  CardBtnWrapper,
  CardImg,
  CardTitle,
  CardWrapper,
} from './MealCard.styled';
import { useContext } from 'react';

export const MealCard = ({ prop }) => {
  const { name, photo } = prop;
  const { setMeals } = useContext(MealsContext);
  const addToCart = () => {
    setMeals(prev => [...prev, prop]);
  };
  return (
    <CardWrapper>
      <CardImg src={`${photo}`} alt={`${name}`} />
      <CardTitle>{name}</CardTitle>
      <CardBtnWrapper>
        <CardBtn type="button" onClick={addToCart}>
          add to Cart
        </CardBtn>
      </CardBtnWrapper>
    </CardWrapper>
  );
};
