import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Courses from "./views/courses/Courses";
import Toolbar from './components/Toolbar';

export const App = () => {
  return (
    <Router>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}  