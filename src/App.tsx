import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './component/Header';
import DisplayClass from './component/DisplayClass';

function App() {
  
  const matrixStudents: Array<string> = [
    'christian',
    'ben',
    'sima',
    'david',
    'michael',
  ];
  // const matrixStudents: Array<string> = [];

  const [whiteboardStudent, setWhiteboardStudent] = useState('sima');

  return (
    <Container fluid className="container">
      <Header />
      <DisplayClass students={matrixStudents} />
      <p>Today's whiteboard was perfomed by {whiteboardStudent}</p>
      <button
        onClick={() => {
          setWhiteboardStudent(
            matrixStudents[Math.floor(Math.random() * matrixStudents.length)]
          );
        }}
      >
        Update Whiteboard Student
      </button>
    </Container>
  );
}

export default App;
