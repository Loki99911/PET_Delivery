export const MealCard = ({ name, price, photo }) => {
  return (
    <li>
      <img src={`{photo}`} alt="" />
      <p>{name}</p>
      <p>{price}</p>
    </li>
  );
};
