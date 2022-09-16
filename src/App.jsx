import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './routes/root';
import Vermas from './routes/vermas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="vermas" element={<Vermas />} />
    </Routes>
  );
}

export default App;
