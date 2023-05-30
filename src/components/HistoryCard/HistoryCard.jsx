import {
  HistoryCardImg,
  HistoryCardMeal,
  HistoryCardMealsBlock,
  HistoryCardText,
  HistoryCardTextWrapper,
  HistoryCardTitle,
  HistoryCardWrapper,
} from './HistoryCard.styled';

export const HistoryCard = ({ prop }) => {
  const { meals, totalValue } = prop;

  return (
    <HistoryCardWrapper>
      <HistoryCardMealsBlock>
        {meals.map(meal => (
          <HistoryCardMeal key={meal.itemId}>
            <HistoryCardImg src={meal.photo} alt={meal.name} />
            <HistoryCardTextWrapper>
              <HistoryCardText>{meal.name}</HistoryCardText>
              <HistoryCardText>Price: {meal.price}</HistoryCardText>
              <HistoryCardText>Quantity: {meal.quantity} pcs.</HistoryCardText>
            </HistoryCardTextWrapper>
          </HistoryCardMeal>
        ))}
      </HistoryCardMealsBlock>

      <HistoryCardTitle>Total: {totalValue}</HistoryCardTitle>
    </HistoryCardWrapper>
  );
};
