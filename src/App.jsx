import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Filtro from './components/Filtro';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Filtro id="Todas" options="./components/ejemplo.jsx" />
    </div>
  );
}

export default App;
