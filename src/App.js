import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import DietForm from './components/DietForm';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/diet-form" element={<DietForm />} />
          <Route path="user-results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;