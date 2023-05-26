import { useState } from 'react';
import {
  FormCardInput,
  FormCardInputWrapper,
  FormCardImg,
  FormCardTitle,
  FormCardWrapper,
} from './FormCard.styled';

export const FormCard = ({ prop }) => {
  const { name, photo, price } = prop;
  const [value, setValue] = useState(0);

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <FormCardWrapper>
      <FormCardImg src={`${photo}`} alt={`${name}`} />

      <FormCardInputWrapper>
        <FormCardTitle>{name}</FormCardTitle>
        <FormCardTitle>{price}</FormCardTitle>
        <FormCardInput
          type="number"
          id="numberInput"
          value={value}
          onChange={handleChange}
          step="1"
        />
      </FormCardInputWrapper>
    </FormCardWrapper>
  );
};
