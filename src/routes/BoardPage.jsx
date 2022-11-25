import styled from 'styled-components';
import Board from '../components/Board';

const Main = styled.main`
  padding: 80px 0 0 373px;
`;

export const BoardPage = () => {
  return (
    <Main>
      <Board />
    </Main>
  );
};

export default BoardPage;
