import styled from 'styled-components';

export const FormCardWrapper = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const FormCardImg = styled.img`
  display: inline-block;
  width: 200px;
`;

export const FormCardTitle = styled.p``;
export const FormCardInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const FormCardInput = styled.input`
  width: 100%;
  max-width: 200px;
  margin-top: 30px;
`;