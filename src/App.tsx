import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Skills from './screens/Skills'
import Profile from './screens/Profile'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />  
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />   
      </Routes>
    </Router>
  );
};

export default App;
