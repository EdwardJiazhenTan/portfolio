import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Reading from './Pages/Reading';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
