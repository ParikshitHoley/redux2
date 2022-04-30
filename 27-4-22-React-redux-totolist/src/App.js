
import { Route, Routes,useParams } from 'react-router-dom';
import './App.css';
import Navbar from './components/Counter/Navbar';
import Todo from './components/Counter/Todo';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
      <Routes>
          <Route path="/" element={<Todo />} />

      </Routes>
      </div>
    </>
   
  );
}

export default App;
