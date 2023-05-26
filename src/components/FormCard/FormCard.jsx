import { useContext, useState } from 'react';
import {
  FormCardInput,
  FormCardInputWrapper,
  FormCardImg,
  FormCardTitle,
  FormCardWrapper,
} from './FormCard.styled';
import { MealsContext } from 'components/App';
import shortid from 'shortid';

export const FormCard = ({ prop }) => {
  const { name, photo, price } = prop;
  const { meals, setMeals } = useContext(MealsContext);
  // const [value, setValue] = useState(0);
  const cardID = shortid.generate();

  const baseValue = meals.find(meal => (meal.id === cardID ? meal.value : 0));
  const [value, setValue] = useState(baseValue || 0);


const handleChange = event => {
  const newValue = event.target.value;
  setValue(newValue);
  const updatedMeals = meals.map(meal => {
    if (meal.id === cardID) {
      return { ...meal, value: newValue };
    }
    return meal;
  });
  console.log(updatedMeals);
  setMeals(updatedMeals);
};

  return (
    <FormCardWrapper>
      <FormCardImg src={`${photo}`} alt={`${name}`} />
      <FormCardInputWrapper>
        <FormCardTitle>{name}</FormCardTitle>
        <FormCardTitle>{price}</FormCardTitle>
        <FormCardInput
          type="number"
          id={cardID}
          value={value}
          onChange={handleChange}
          step="1"
        />
      </FormCardInputWrapper>
    </FormCardWrapper>
  );
};
