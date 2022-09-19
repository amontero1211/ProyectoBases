import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/root';
import Vermas from './routes/vermas';
import Login from './routes/Login';
import Register from './routes/Register';
import Autor from './routes/Autor';
import PasswordForgot from './routes/PasswordForgot';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="vermas" element={<Vermas />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="passwordforgot" element={<PasswordForgot />} />
      <Route path="autor" element={<Autor />} />
    </Routes>
  );
}

export default App;
