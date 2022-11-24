import { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../constants/colors';
import { tools } from '../constants/tools';
import ToolItem from './ToolItem';

const ToolsWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 154px;
  left: 219px;
  height: 100%;
  box-sizing: border-box;
  padding: 26px 0px 0px 16px;
  background-color: ${colors.TOOLS_BG};
`;

const Title = styled.span`
  display: flex;
  margin-bottom: 37px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.TEXT_TOOLS_COLOR};
`;

export const ToolsBar = () => {
  const [activeTool, setActiveTool] = useState(null);

  const handleActiveTool = (tool) => {
    setActiveTool(tool);
  };

  return (
    <ToolsWrapper>
      <Title>Tools</Title>
      {tools.map((tool) => (
        <ToolItem key={tool.id} tool={tool} activeTool={activeTool} handleActiveTool={handleActiveTool} />
      ))}
    </ToolsWrapper>
  );
};
