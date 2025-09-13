import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Reading from "./Pages/Reading";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";
import AimPractice from "./Pages/AimPractice";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aim-practice" element={<AimPractice />} />
      </Routes>
    </Router>
  );
}
