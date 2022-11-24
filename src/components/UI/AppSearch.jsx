import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';

const Search = styled.input`
  ${(props) => {
    switch (props.variant) {
      case 'dark':
        return css`
          width: 187px;
          height: 32px;
          padding: 9px 10px;
          box-sizing: border-box;
          border-radius: 4px;
          color: ${colors.BASE_WHITE};
          background: ${colors.INPUT_SEARCH_DARK_COLOR};
        `;
      case 'light':
        return css`
          width: 180px;
          height: 40px;
          padding: 12px 16px;
          box-sizing: border-box;
          border-radius: 50px;
          color: ${colors.BASE_WHITE};
          background: ${colors.INPUT_SEARCH_LIGHT_COLOR};
        `;
      default:
        return css`
          width: 180px;
          height: 40px;
          padding: 12px 16px;
          box-sizing: border-box;
          border-radius: 50px;
          color: ${colors.BASE_WHITE};
          background: ${colors.INPUT_SEARCH_LIGHT_COLOR};
        `;
    }
  }}
`;

export const AppSearch = ({ variant }) => {
  return (
    <>
      <Search placeholder='Search...' variant={variant} />
    </>
  );
};

export default AppSearch;
