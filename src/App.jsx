import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Filtro from './components/Filtro';
import Artes from './components/Artes';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Filtro id="Todas" options="./components/ejemplo.jsx" />
        <Artes />
    </div>
  );
}

export default App;
