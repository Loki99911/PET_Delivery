// import React, { useCallback, useContext, useEffect, useState } from 'react';
// import {
//   FormCardInput,
//   FormCardInputWrapper,
//   FormCardImg,
//   FormCardTitle,
//   FormCardWrapper,
// } from './FormCard.styled';
// import { MealsContext } from 'components/App';
// import shortid from 'shortid';
// import { MealsValuesContext } from 'components/ShoppingCart/ShoppingCart';

// export const FormCard = ({ prop }) => {
  // const chageMealsValues = useContext(MealsValuesContext);
  // const { name, photo, price } = prop;
  // const [totalValue, setTotalValue] = useState(0);
  // const [value, setValue] = useState(0);
  // const { meals, setMeals } = useContext(MealsContext);

  // useEffect(() => {
  //   const currentValue = meals.reduce(
  //     (accumulator, el) => accumulator + (el.price*100 * +el.quantity)/100,
  //     0
  //   );
  //   setTotalValue(currentValue);
  // });

//   return (
//     <FormCardWrapper key={name}>
//       <FormCardImg src={`${photo}`} alt={`${photo}`} />
//       <FormCardInputWrapper>
//         <FormCardTitle>{name}</FormCardTitle>
//         <FormCardTitle>{price}</FormCardTitle>
//         <FormCardInput
//           type="number"
//           value={value}
//           onChange={event => handleChangeValue(event, itemId)}
//           step="1"
//           min="0"
//           max="10"
//         />
//       </FormCardInputWrapper>
//     </FormCardWrapper>
//   );
// };
