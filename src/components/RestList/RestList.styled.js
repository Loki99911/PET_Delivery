import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RestAside = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;

export const RestTitle = styled.h1`
  padding-bottom: 30px;
  text-decoration: underline;
  color: yellow;
`;

export const RestLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  color: #008000;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  padding: 10px;
  transition: all 350ms linear;
  border-radius: 5px;

  &:hover {
    color: #c76cf5;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &.active {
    color: #cc17e8;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:not(.active) {
    pointer-events: ${props => (props.meals.length > 0 ? 'none' : 'auto')};
    opacity: ${props => (props.meals.length > 0 ? 0.5 : 1)};
  }
`;
