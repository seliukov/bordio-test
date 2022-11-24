import styled from 'styled-components';

const IconWrapper = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  transition: all 300ms;
  cursor: pointer;

  &.activeCategory {
    transform: scale(1, -1);
    transition: all 300ms;
  }
`;

export const AppIcon = ({ children, size, className }) => {
  return (
    <IconWrapper size={size} className={className}>
      {children}
    </IconWrapper>
  );
};

export default AppIcon;
