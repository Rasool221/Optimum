import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Dashboard from '../components/dashboard';

function Main() {
  return <Dashboard />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
