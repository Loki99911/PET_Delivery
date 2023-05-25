import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RestAside = styled.aside`
display:flex;
flex-direction: column;
border: 1px dashed red;
`;

export const RestLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #35e6d6;
  font-weight: 500;
  color: #ff8c00;
  padding: 10px;
  transition: color 350ms liner;
  &:not(:last-child) {
    padding-bottom: 15px;
  }
  &:hover {
    color: red;
  }
  &.active {
    color: #7cfc00;
  }
`;