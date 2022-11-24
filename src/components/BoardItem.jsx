import styled, { css } from 'styled-components';

import { colors } from '../constants/colors';

const Li = styled.li`
  width: 100%;
  height: 24px;
  margin-left: -16px;
  padding: 5px 0px 6px 16px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.SECONDARY_TEXT_COLOR};
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: ${colors.MENU_ACTIVE_COLOR};
    `}

  :hover {
    background-color: ${colors.MENU_ACTIVE_COLOR};
  }
`;

export const BoardItem = ({ project, handleActiveBoard, activeBoard }) => {
  return (
    <Li onClick={() => handleActiveBoard(project)} active={activeBoard.id === project.id}>
      {project.label}
    </Li>
  );
};

export default BoardItem;
