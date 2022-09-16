import '../App.css';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Filtro from '../components/Filtro';
import Artes from '../components/Artes';

function Login() {
  //   const navigate = useNavigate();
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          navigate('vermas');
        }}
      /> */}
      <Header />
      <Welcome />
      <Filtro id="Todas" options="./components/ejemplo.jsx" />
      <Artes />
    </div>
  );
}

export default Login;
