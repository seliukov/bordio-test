import styled from 'styled-components';

import { colors } from '../constants/colors';
import AppButton from './UI/AppButton';
import AppImage from './UI/AppImage';
import AppSearch from './UI/AppSearch';
import AppSelect from './UI/AppSelect';
import AppIcon from './UI/AppIcon';
import PlusIcon from '../assets/images/ico_plus.svg';
import Avatar from '../assets/images/avatar.png';
import { ReactComponent as Bell } from '../assets/images/ico_bell.svg';

const HeaderWrapper = styled.header`
  position: absolute;
  width: calc(100% - 373px);
  height: 80px;
  left: 373px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${colors.BASE_WHITE};
  box-shadow: 0px 2px 4px #f0f1f2;
`;

const GroupWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Header = () => {
  const handleClick = () => {};

  return (
    <HeaderWrapper>
      <GroupWrapper>
        <AppButton title={'Add new'} icon={PlusIcon} onClick={handleClick} />
        <AppSelect />
        <AppSelect />
      </GroupWrapper>
      <GroupWrapper>
        <AppSearch variant={'light'} />
        <AppIcon>
          <Bell fill={colors.ICON_COLOR} />
        </AppIcon>
        <AppImage image={Avatar} alt='avatar' width={40} height={40} />
      </GroupWrapper>
    </HeaderWrapper>
  );
};

export default Header;
