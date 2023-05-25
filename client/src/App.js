import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home,About,Contact,Login ,Register,Dashboard } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/userdash"
            element={<Dashboard />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
