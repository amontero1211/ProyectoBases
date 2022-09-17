import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/root';
import Vermas from './routes/vermas';
import Login from './routes/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="vermas" element={<Vermas />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
