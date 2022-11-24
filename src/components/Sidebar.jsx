import styled from 'styled-components';

import { colors } from '../constants/colors';
import BoardList from './BoardList';
import Bordio from '../assets/images/bordio-logo.svg';
import AppImage from './UI/AppImage';
import AppSearch from './UI/AppSearch';

const Aside = styled.aside`
  position: absolute;
  width: 100%;
  max-width: 219px;
  height: 100%;
  box-sizing: border-box;
  padding: 26px 0px 0px 16px;
  background-color: ${colors.ASIDE_BG};
  color: ${colors.BASE_WHITE};
`;

const SearchWrapper = styled.div`
  margin: 26px 0 19px;
`;

export const Sidebar = () => {
  return (
    <Aside>
      <AppImage image={Bordio} alt='logo' width={131} height={32} />
      <SearchWrapper>
        <AppSearch variant={'dark'} />
      </SearchWrapper>
      <BoardList />
    </Aside>
  );
};

export default Sidebar;
