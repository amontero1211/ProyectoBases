import '../App.css';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Artes from '../components/Artes';
import Filtro from '../components/Filtro';
// import Slack from '@mui/material/Slack';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

const opciones = ['The Godfather', 'Pulp Fiction'];

function Root() {
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
      <div className="Filtro">
        <Filtro options={opciones} />
      </div>
      <Artes />
    </div>
  );
}

export default Root;
