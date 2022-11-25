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
import { filterOptions, selectOptions } from '../constants/selection';
import AppBadge from './UI/AppBadge';

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
        <AppSelect options={selectOptions} defaultValue={selectOptions[2].label} id={'views'} />
        <AppSelect options={filterOptions} id={'filters'} />
      </GroupWrapper>
      <GroupWrapper>
        <AppSearch variant={'light'} />
        <AppBadge color={colors.BADGE_BG_COLOR} content={'99+'}>
          <AppIcon>
            <Bell />
          </AppIcon>
        </AppBadge>
        <AppImage image={Avatar} alt='avatar' width={40} height={40} />
      </GroupWrapper>
    </HeaderWrapper>
  );
};

export default Header;
