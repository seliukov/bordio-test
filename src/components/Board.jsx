import styled from 'styled-components';

import { COLUMNS, defaultTasks } from '../constants/cards';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import BoardColumn from './BoardColumn';
import { useState } from 'react';
import Card from './Card';
import useMobile from '../hooks/useMobile';
import { getArrayRandElement } from '../helpers/getArrayRandElement';
import { cardColors } from '../constants/colors';

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Board = () => {
  const isMobile = useMobile();
  const [tasks, setTasks] = useState(defaultTasks.map((task) => ({ ...task, color: getArrayRandElement(cardColors) })));

  const moveCardHandler = (dragIndex, hoverIndex, dragColumn) => {
    const targetArray = [...tasks].filter((task) => task.status === dragColumn);

    const dragItem = targetArray[dragIndex];

    if (dragItem) {
      setTasks((prevState) => {
        const coppiedStateArray = [...prevState];
        const tempArr = [];

        Object.values(COLUMNS).forEach((val) => {
          if (val === COLUMNS.createStatus) return;
          if (val === dragColumn) {
            const copiedTarget = [...targetArray];
            const prevItem = copiedTarget.splice(hoverIndex, 1, dragItem);
            copiedTarget.splice(dragIndex, 1, prevItem[0]);
            tempArr.push(copiedTarget);

            return targetArray;
          }

          tempArr.push(coppiedStateArray.filter((task) => task?.status === val));
        });

        return tempArr.flat();
      });
    }
  };

  const getTasksByColumn = (columnName) => {
    return tasks
      .filter((task) => task?.status === columnName)
      .map((task, index) => (
        <Card key={task.id} index={index} task={task} setTasks={setTasks} moveCardHandler={moveCardHandler} />
      ));
  };

  return (
    <BoardWrapper>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        {Object.keys(COLUMNS).map((key) => (
          <BoardColumn key={key} title={COLUMNS[key]} count={3}>
            {getTasksByColumn(COLUMNS[key])}
          </BoardColumn>
        ))}
      </DndProvider>
    </BoardWrapper>
  );
};

export default Board;
