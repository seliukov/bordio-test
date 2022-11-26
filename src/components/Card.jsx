import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';

import { colors } from '../constants/colors';
import { COLUMNS } from '../constants/cards';

const CardWrapper = styled.div`
  max-height: 84px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 15px;
  margin: 10px 0;
  color: ${colors.PRIMARY_TEXT_COLOR};
  background: ${(props) => props.color};
  border-radius: 8px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }

  ${(props) =>
    props.completed &&
    css`
      background-color: ${colors.COMPLETED_CARD_COLOR};
      color: ${colors.COMPLETED_TEXT_COLOR};

      div {
        :first-child {
          text-decoration-line: line-through;
        }

        :last-child {
          color: ${colors.COMPLETED_TEXT_COLOR};
        }
      }
    `};
`;

const TitleCard = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  max-height: 32px;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const DurationWrapper = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${colors.CARD_SUBTITLE_COLOR};
`;

export const Card = ({ index, task, setTasks, moveCardHandler }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'CARD',

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const dragColumn = item.currentColumnName;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCardHandler(dragIndex, hoverIndex, dragColumn);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id: task.id, title: task.title, currentColumnName: task.status },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;
        const { newTask, inProgress, completed, scheduled } = COLUMNS;
        switch (name) {
          case newTask:
            handleChangeColumn(item, newTask);
            break;
          case scheduled:
            handleChangeColumn(item, scheduled);
            break;
          case inProgress:
            handleChangeColumn(item, inProgress);
            break;
          case completed:
            handleChangeColumn(item, completed);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleChangeColumn = (currentTask, status) => {
    setTasks((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          status: e?.id === currentTask?.id ? status : e?.status,
        };
      });
    });
  };

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <CardWrapper ref={ref} style={{ opacity }} color={task.color} completed={task.status === COLUMNS.completed}>
      <TitleCard>{task.title}</TitleCard>
      <DurationWrapper>{task.duration}</DurationWrapper>
    </CardWrapper>
  );
};

export default Card;
