import styled from 'styled-components';

export const HistoryCardWrapper = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const HistoryCardMealsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

export const HistoryCardMeal = styled.div`
display: flex;
padding:5px;
border: 1px solid #000000;
border-radius: 5px;
overflow:hidden;
`;

export const HistoryCardImg = styled.img`
  display: inline-block;
  width: 100px;
  height: 70px;
`;

export const HistoryCardTitle = styled.h2`
text-align: center;
`;
export const HistoryCardText = styled.p``;

export const HistoryCardTextWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items: center;
`;

