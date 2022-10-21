import { 
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';
import React from 'react';
import "./styles/App.css"
import Main from './pages/main';
import ProjectIs from './pages/projectsAbout';

// import MainWindow from './UI/window/window';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/project' element={<ProjectIs/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
