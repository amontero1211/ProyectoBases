import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/root';
import Vermas from './routes/vermas';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="vermas" element={<Vermas />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
