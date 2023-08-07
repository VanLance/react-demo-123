import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Header from './component/Header';
import MatrixClassroomPage from './pages/MatrixClassroomPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  // const matrixStudents: Array<string> = [];

  return (
    <Container fluid className="app">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MatrixClassroomPage />} />
          <Route path='/user-page' element={<UserPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
