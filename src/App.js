import { ThemeProvider } from 'styled-components';

import BoardPage from './routes/BoardPage';
import { colors, cardColors } from './constants/colors';
import MainLayout from './layouts/MainLayout';
import './App.css';

const theme = {
  colors,
  cardColors,
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <BoardPage />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
