import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectDescription from './Pages/ProjectDescription';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDescription />} />
      </Routes>
    </Router>
  );
};

export default App;
