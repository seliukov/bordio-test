import { ThemeProvider } from 'styled-components';
import BoardPage from './routes/BoardPage';

import './App.css';
import { colors, cardColors } from './constants/colors';

const theme = {
  colors,
  cardColors,
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BoardPage />
    </ThemeProvider>
  );
};

export default App;
