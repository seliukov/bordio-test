import BoardPage from './routes/BoardPage';
import MainLayout from './layouts/MainLayout';
import './App.css';

export const App = () => {
  return (
    <MainLayout>
      <BoardPage />
    </MainLayout>
  );
};

export default App;
