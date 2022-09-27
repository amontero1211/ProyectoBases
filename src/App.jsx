import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/root';
import Vermas from './routes/vermas';
import Login from './routes/Login';
import Register from './routes/Register';
import Autor from './routes/Autor';
import PasswordForgot from './routes/PasswordForgot';
import Direccionfactura from './routes/Direccionfactura';
import Factura from './routes/Factura';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="vermas" element={<Vermas />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="passwordforgot" element={<PasswordForgot />} />
      <Route path="autor/:authorId" element={<Autor />} />
      <Route path="Direccionfactura" element={<Direccionfactura />} />
      <Route path="factura" element={<Factura />} />
    </Routes>
  );
}

export default App;
