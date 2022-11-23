import styled from 'styled-components';

const Logo = styled.img``;

export const AppLogo = ({ logo }) => {
  return <Logo src={logo} />;
};

export default AppLogo;
