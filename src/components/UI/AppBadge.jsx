import styled from 'styled-components';
import { colors } from '../../constants/colors';

const BadgeWrapper = styled.div`
  position: relative;
`;
const BadgeContent = styled.sup`
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 4px 2px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  left: 50%;
  top: -50%;
  color: ${colors.BASE_WHITE};
  border: 1px solid ${colors.BASE_WHITE};
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

export const AppBadge = ({ children, color, content }) => {
  return (
    <BadgeWrapper>
      <div>{children}</div>
      <BadgeContent color={color}>{content}</BadgeContent>
    </BadgeWrapper>
  );
};

export default AppBadge;
