import styled from 'styled-components';

export const CardWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const CardImg = styled.img`
  display: inline-block;
  width: 300px;
  height: 200px;
`;

export const CardTitle = styled.p``;
export const CardBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

export const CardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100px;
  color: #ffffff;
  background-color: #008000;
  transition: background-color 350ms linear;

  &:hover {
    background-color: #cc17e8;
    cursor: pointer;
  }
  
  &:disabled {
    background-color: #cc17e8;
    opacity: 0.5;
  }
`;
