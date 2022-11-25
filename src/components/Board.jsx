import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { cards, statuses } from '../constants/cards';
import { colors } from '../constants/colors';
import Card from './Card';
import ColumnTitle from './ColumnTitle';

const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ColumnWrapper = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  :first-child {
    width: 300px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  padding: 39px 10px 0px;
  gap: 10px;
  border-right: 1px solid ${colors.TABLE_BORDER_COLOR};

  :first-child {
    padding: 39px 10px 0px 10px;
  }
`;

export const Board = () => {
  const [sortedCards, setSortedCards] = useState(null);
  const isNotEmptyBoard = sortedCards && !!Object.keys(sortedCards).length;

  useEffect(() => {
    getCards();
  }, []);

  const getCards = () => {
    let tempCards = {};

    statuses.forEach(({ value }) => {
      tempCards[value] = cards.filter((card) => card.status === value);
    });

    setSortedCards(tempCards);
  };

  return (
    <BoardWrapper>
      {statuses?.map(({ label, value }) => (
        <ColumnWrapper key={value}>
          <ColumnTitle status={label} count={isNotEmptyBoard && sortedCards[value].length} />
          <CardsWrapper>
            {isNotEmptyBoard ? sortedCards[value].map((card) => <Card key={card.id} card={card} />) : '...loading'}
          </CardsWrapper>
        </ColumnWrapper>
      ))}
    </BoardWrapper>
  );
};

export default Board;
