import styled, { css } from 'styled-components';
import cn from 'classnames';

import AppIcon from './AppIcon';
import { colors } from '../../constants/colors';
import { ReactComponent as Arrow } from '../../assets/images/arrows.svg';
import { useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .iconWrapper {
    position: absolute;
    right: 14px;
    cursor: pointer;

    &.active {
      transform: scale(1, -1);
    }
  }
`;

const SelectInput = styled.input`
  width: 114px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
  gap: 8px;
  background: ${colors.SELECT_COLOR};
  border-radius: 50px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: ${colors.SELECT_ACTIVE_COLOR};
    `}
`;

const Select = styled.ul`
  display: flex;
  min-width: 132px;
  height: 132px;
  gap: 4px;
  top: 48px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  cursor: pointer;
`;

const Li = styled.li`
  display: flex;
  padding: 0 8px;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  :hover {
    min-width: 120px;
    background: ${colors.SELECT_COLOR};
    border-radius: 4px;
  }
`;

export const AppSelect = ({ options, id, defaultValue = '' }) => {
  const [isOpenSelect, setOpenSeleect] = useState({});
  const [valueState, setValueState] = useState({
    [id]: (defaultValue ? defaultValue : !!options?.length && options[0].label) || '',
  });
  const selectRef = useRef();

  const handleCloseSelect = () => {
    setOpenSeleect({ ...isOpenSelect, [id]: false });
  };

  const handleSelectOption = (el) => {
    setValueState({ ...valueState, [id]: el.label });
    setOpenSeleect({ ...isOpenSelect, [id]: false });
  };

  useOutsideClick(isOpenSelect, selectRef, handleCloseSelect);

  return (
    <SelectWrapper ref={selectRef} onClick={() => setOpenSeleect({ ...isOpenSelect, [id]: !isOpenSelect[id] })}>
      <SelectInput id={id} value={valueState[id]} readOnly active={!!isOpenSelect[id]} />
      {isOpenSelect[id] && (
        <Select>
          {options?.map((el) => (
            <Li key={el.value} onClick={() => handleSelectOption(el)}>
              {el.label}
            </Li>
          ))}
        </Select>
      )}
      <AppIcon className={cn('iconWrapper', { active: !!isOpenSelect[id] })} size={24}>
        <Arrow fill={colors.ICON_COLOR} />
      </AppIcon>
    </SelectWrapper>
  );
};

export default AppSelect;
