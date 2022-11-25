import styled, { css } from 'styled-components';
import { cardColors, colors } from '../constants/colors';
import { getArrayRandElement } from '../helpers/getArrayRandElement';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  border-radius: 8px;
  color: ${colors.PRIMARY_TEXT_COLOR};
  background: ${(props) => props.color};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  > span {
    :first-child {
      margin-bottom: 2px;
    }

    :last-child {
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: ${colors.CARD_SUBTITLE_COLOR};
    }
  }

  ${(props) =>
    props.completed &&
    css`
      background-color: ${colors.COMPLETED_CARD_COLOR};
      color: ${colors.COMPLETED_TEXT_COLOR};

      span {
        :first-child {
          text-decoration-line: line-through;
        }

        :last-child {
          color: ${colors.COMPLETED_TEXT_COLOR};
        }
      }
    `}

  :hover {
    opacity: 0.5;
  }
`;

export const Card = ({ card }) => {
  return (
    <CardWrapper color={getArrayRandElement(cardColors)} completed={card.status === 'completed'}>
      <span>{card.title}</span>
      <span>{card.duration}</span>
    </CardWrapper>
  );
};

export default Card;
