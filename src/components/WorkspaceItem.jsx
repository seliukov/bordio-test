import styled, { css } from 'styled-components';

import { colors } from '../constants/colors';
import AppImage from './UI/AppImage';

const ItemWrapper = styled.li`
  width: 100%;
  height: 24px;
  margin-left: -16px;
  padding: 4px 0px 6px 16px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  > span {
    margin-left: 8px;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${colors.MENU_ACTIVE_COLOR};
    `}

  :hover {
    background-color: ${colors.MENU_ACTIVE_COLOR};
  }
`;

export const WorkspaceItem = ({ workspace, handleActiveBoard, activeBoard }) => {
  return (
    <ItemWrapper onClick={() => handleActiveBoard(workspace)} active={activeBoard.id === workspace.id}>
      <AppImage image={workspace.avatar} alt='avatar' width={22} height={22} />
      <span>{workspace.label}</span>
    </ItemWrapper>
  );
};

export default WorkspaceItem;
