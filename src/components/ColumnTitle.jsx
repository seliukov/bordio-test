import styled from 'styled-components';
import { colors } from '../constants/colors';

const TitleWrapper = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid ${colors.TABLE_BORDER_COLOR};
`;

const CountWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 9px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: ${colors.SECONDARY_TEXT_COLOR};
  background: ${colors.CARD_COUNTER_COLOR};
  border-radius: 100px;
`;

export const ColumnTitle = ({ status, count }) => {
  return (
    <TitleWrapper>
      {status}
      {!!count && <CountWrapper>{count}</CountWrapper>}
    </TitleWrapper>
  );
};

export default ColumnTitle;
