import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 5px 30px;
  height: 50px;
  background-color: rgba(255,255,255,0.7);
  margin-bottom: 20px;

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
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: #008000;
  padding: 10px;
  transition: color 350ms liner;
  &:not(:last-child) {
    padding-right: 15px;
  }
  &:hover {
    color: #c76cf5;
  }
  &.active {
    color: #cc17e8;
  }
`;
