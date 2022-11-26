import styled from 'styled-components';
import { useDrop } from 'react-dnd';

import ColumnTitle from './ColumnTitle';

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  flex-wrap: wrap;
  max-width: 290px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  :first-child {
    max-width: 300px;
  }
`;

const CardsWrapper = styled.div`
  padding-top: 29px;
`;

export const BoardColumn = ({ children, title, count }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <ColumnWrapper key={title} ref={drop}>
      <ColumnTitle title={title} count={Array.isArray(children) ? children.length : 0} />
      <CardsWrapper>{children}</CardsWrapper>
    </ColumnWrapper>
  );
};

export default BoardColumn;
