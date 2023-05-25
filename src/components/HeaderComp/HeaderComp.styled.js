import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 5px;
`;
export const HeaderWraper = styled.nav``;
export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
`;
export const HeaderItem = styled.li`
  padding: 5px;
  border: 1px solid black;
`;

export const HeaderLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #35e6d6;
  font-weight: 500;
  color: #ff8c00;
  padding: 10px;
  transition: color 350ms liner;
  &:not(:last-child) {
    padding-right: 15px;
  }
  &:hover {
    color: #008000;
  }
  &.active {
    color: #7cfc00;
  }
`;
