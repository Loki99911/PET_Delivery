import {
  Header,
  HeaderLink,
  HeaderList,
  HeaderWraper,
} from './HeaderComp.styled';

export const HeaderComp = () => {
  return (
    <Header>
      <HeaderWraper>
        <HeaderList>
          <HeaderLink to={'/main'}>Shop</HeaderLink>
          <HeaderLink to={'/cart'}>Shopping Cart</HeaderLink>
          <HeaderLink to={'/history'}>History</HeaderLink>
        </HeaderList>
      </HeaderWraper>
    </Header>
  );
};
