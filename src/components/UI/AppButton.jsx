import styled from 'styled-components';
import { colors } from '../../constants/colors';

const Button = styled.button`
  width: 119px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  border-radius: 50px;
  color: ${colors.BASE_WHITE};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  background: ${colors.BUTTON_COLOR};
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
`;

export const AppButton = ({ title, icon, onClick }) => {
  const handleClick = () => {
    if (!!onClick) onClick();
  };

  return (
    <>
      <Button onClick={handleClick}>
        {icon && (
          <ImageWrapper>
            <img src={icon} alt='plus icon' />
          </ImageWrapper>
        )}
        {title}
      </Button>
    </>
  );
};

export default AppButton;
