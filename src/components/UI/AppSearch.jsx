import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import SearchIcon from '../../assets/images/ico_search.svg';

const SearchWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  > img {
    position: absolute;

    &.dark {
      top: 9px;
      right: 28px;
    }

    &.light {
      top: 12px;
      right: 16px;
    }
  }
`;

const Search = styled.input`
  ${(props) => {
    switch (props.variant) {
      case 'dark':
        return css`
          width: 100%;
          max-width: 187px;
          height: 32px;
          padding: 9px 10px;
          box-sizing: border-box;
          border-radius: 4px;
          color: ${colors.BASE_WHITE};
          background: ${colors.INPUT_SEARCH_DARK_COLOR};
        `;
      case 'light':
        return css`
          width: 100%;
          max-width: 180px;
          height: 40px;
          padding: 12px 16px;
          box-sizing: border-box;
          border-radius: 50px;
          color: ${colors.PRIMARY_TEXT_COLOR};
          background: ${colors.INPUT_SEARCH_LIGHT_COLOR};
        `;
      default:
        return css`
          width: 100%;
          max-width: 180px;
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
    <SearchWrapper>
      <Search placeholder='Search...' variant={variant} />
      <IconWrapper>
        <img src={SearchIcon} alt='search icon' className={variant} />
      </IconWrapper>
    </SearchWrapper>
  );
};

export default AppSearch;
