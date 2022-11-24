import styled, { css } from 'styled-components';

import { colors } from '../constants/colors';
import { ReactComponent as Roadmap } from '../assets/images/ico_union.svg';
import { ReactComponent as Schedule } from '../assets/images/ico_calendar.svg';
import { ReactComponent as Tasks } from '../assets/images/ico_tasks.svg';
import { ReactComponent as Notes } from '../assets/images/ico_notes.svg';
import { ReactComponent as Files } from '../assets/images/ico_files.svg';

const ItemWrapper = styled.li`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 4px 0 6px 16px;
  margin-left: -16px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  > span {
    margin-left: 15px;
  }

  ${(props) =>
    props.active &&
    css`
      color: ${colors.ACTIVE_COLOR};
      background-color: ${colors.BASE_WHITE};
      border-radius: 0 8px 8px 0;
      width: calc(100% - 16px);

      ::before {
        content: '';
        position: absolute;
        height: 50px;
        width: 4px;
        transform: translateX(-16px);
        background: ${colors.ACTIVE_COLOR};
        border-radius: 0 10px 10px 0;
      }
    `}

  :hover {
    background-color: ${colors.BASE_WHITE};
    border-radius: 0px 8px 8px 0px;
    width: calc(100% - 16px);
  }
`;

export const ToolItem = ({ tool, activeTool, handleActiveTool }) => {
  const getItemIcon = ({ active }) => {
    switch (tool.label) {
      case 'Roadmap':
        return <Roadmap fill={active ? colors.ACTIVE_COLOR : colors.ICON_COLOR} />;
      case 'Schedule':
        return <Schedule fill={active ? colors.ACTIVE_COLOR : colors.ICON_COLOR} />;
      case 'Tasks':
        return <Tasks fill={active ? colors.ACTIVE_COLOR : colors.ICON_COLOR} />;
      case 'Notes':
        return <Notes fill={active ? colors.ACTIVE_COLOR : colors.ICON_COLOR} />;
      case 'Files':
        return <Files fill={active ? colors.ACTIVE_COLOR : colors.ICON_COLOR} />;
      default:
        break;
    }
  };

  return (
    <ItemWrapper onClick={() => handleActiveTool(tool)} active={activeTool?.id === tool.id}>
      {getItemIcon({ active: activeTool?.id === tool.id })}
      <span>{tool.label}</span>
    </ItemWrapper>
  );
};

export default ToolItem;
