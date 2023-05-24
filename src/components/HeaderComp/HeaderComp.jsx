import { NavLink } from 'react-router-dom';

export const HeaderComp = () => {
  return (
    <ul>
      <li>
        <NavLink to={'/'}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={'/cart'}>ShoppingCart</NavLink>
      </li>
    </ul>
  );
};
