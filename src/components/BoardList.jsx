import { useState } from 'react';
import styled from 'styled-components';

import ProjectItem from './BoardItem';
import WorkspaceItem from './WorkspaceItem';
import AppIcon from './UI/AppIcon';
import { favorites, myProjects, workspaces } from '../constants/menu';
import { colors } from '../constants/colors';
import { ReactComponent as Arrow } from '../assets/images/arrows.svg';

const TitleCategory = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 3px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;

  > span {
    margin-left: 8px;
  }
`;

const WorkspaceWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

const categories = { favorites: 'favorites', projects: 'projects' };

export const BoardList = () => {
  const [activeBoard, setActiveBoard] = useState(workspaces[0] || null);
  const [isOpenCategory, setOpenCategory] = useState({
    projects: false,
    favorites: false,
  });

  const handleActiveBoard = (board) => {
    setActiveBoard(board);
  };

  const handleCategory = (cat) => {
    setOpenCategory({ ...isOpenCategory, [cat]: !isOpenCategory[cat] });
  };

  return (
    <>
      <WorkspaceWrapper>
        {workspaces.map((workspace) => (
          <WorkspaceItem
            key={workspace.id}
            workspace={workspace}
            handleActiveBoard={handleActiveBoard}
            activeBoard={activeBoard}
          />
        ))}
      </WorkspaceWrapper>
      <TitleCategory onClick={() => handleCategory('favorites')}>
        <AppIcon className={isOpenCategory[categories.favorites] && 'activeCategory'}>
          <Arrow fill={colors.BASE_WHITE} />
        </AppIcon>
        <span>Favorites</span>
      </TitleCategory>
      {isOpenCategory[categories.favorites] &&
        favorites.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            handleActiveBoard={handleActiveBoard}
            activeBoard={activeBoard}
          />
        ))}
      <TitleCategory onClick={() => handleCategory('projects')}>
        <AppIcon className={isOpenCategory[categories.projects] && 'activeCategory'}>
          <Arrow fill={colors.BASE_WHITE} />
        </AppIcon>
        <span>My projects</span>
      </TitleCategory>
      {isOpenCategory[categories.projects] &&
        myProjects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            handleActiveBoard={handleActiveBoard}
            activeBoard={activeBoard}
          />
        ))}
    </>
  );
};

export default BoardList;
