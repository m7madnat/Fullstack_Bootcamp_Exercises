import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import One from './components/One';
import Student from './components/Student';

// ('https://capsules7.herokuapp.com/api/group/one/');
// ('https://capsules7.herokuapp.com/api/group/two');
//(`https://capsules7.herokuapp.com/api/user/${id}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [studentsData, setStudentsData] = useState({});

  return (
    <div className='App'>
      <Nav />
      {isLoading && <h2 className='spinner'>Spinner</h2>}
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/group-one' element={<One setIsLoading={setIsLoading} />} />
        <Route
          path='/group-one/:id'
          element={<Student setIsLoading={setIsLoading} setStudentsData={setStudentsData} />}
        />
        <Route path='/group-two' element={<h1>group-two</h1>} />
        <Route path='/*' element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}
export default App;
