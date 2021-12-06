import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import DietForm from './components/DietForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/diet-form" element={<DietForm />} />
          <Route path="/register" element={<SignUpForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;