import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Header from './component/Header';
import MatrixClassroomPage from './pages/MatrixClassroomPage';
import UserPage from './pages/UserPage';
// import Posts from './pages/Posts';
import FormPage from './pages/FormPage';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import Logout from './component/Logout';

function App() {
  // const matrixStudents: Array<string> = [];

  return (
    <Container fluid className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MatrixClassroomPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user-page/:username" element={<UserPage />} />
          <Route
            path="/login"
            element={
              <FormPage>
                <LoginForm />
              </FormPage>
            }
          />
          {/* <Route path="/posts" element={<Posts />} /> */}
          <Route
            path="/register"
            element={
              <FormPage>
                <RegisterForm />
              </FormPage>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
