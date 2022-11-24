import styled from 'styled-components';

import { workspaces } from '../constants/menu';
import WorkspaceItem from './WorkspaceItem';

const WorkspaceWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const WorkspaceContainer = () => {
  return (
    <WorkspaceWrapper>
      {workspaces.map((workspace) => (
        <WorkspaceItem key={workspace.id} workspace={workspace} />
      ))}
    </WorkspaceWrapper>
  );
};

export default WorkspaceContainer;
