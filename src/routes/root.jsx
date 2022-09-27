import '../App.css';
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Artes from '../components/Artes';
import Filtro from '../components/Filtro';
import { set } from 'react-hook-form';
// import Slack from '@mui/material/Slack';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

const opciones = [
  'Filtrar por Genero',
  'Filtrar por Artista',
  'Precio(menor a mayor)',
];
const opcionesgenero = [
  'Pintura',
  'Fotografia',
  'Ceramica',
  'Orfebreria',
  'Escultura',
];

const opcionesartista = ['Artista x'];
const baseURL = 'http://127.0.0.1:8000';

const FILTER_MAP = {
  GENRE: 'Filtrar por Genero',
  ARTIST: 'Filtrar por Artista',
  PRICE: 'Precio(menor a mayor)',
};

export default function Root() {
  // const navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [genres, setGenres] = useState(opcionesgenero);
  const [artists, setArtists] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(FILTER_MAP.GENRE);
  const [currentGenre, setCurrentGenre] = useState();
  const [currentArtist, setCurrentArtist] = useState();
  const [artistData, setArtistData] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const { data: artworksData } = await axios.get(`${baseURL}/artworks`);
      const { data: artistsData } = await axios.get(`${baseURL}/artists`);
      setArtistData(artistsData);
      setInfo(artworksData);
      // eslint eslint-ignore
      setGenres((prevState) => {
        return Array.from(
          new Set([...prevState, ...artworksData.map(({ genre }) => genre)])
        );
      });
      setArtists(Array.from(new Set([...artistsData.map(({ name }) => name)])));
    };
    getInfo();
  }, []);

  useEffect(() => {
    if (currentFilter === FILTER_MAP.GENRE) {
      setFilteredInfo(info.filter((i) => i.genre === currentGenre));
    }
    if (currentFilter === FILTER_MAP.ARTIST) {
      const artist = artistData.find(({ name }) => name === currentArtist);

      setFilteredInfo(info.filter((i) => i.artist_id === artist?.id));
    }
  }, [currentFilter, currentGenre, currentArtist]);

  return (
    <div className="App">
      <Header />
      <Welcome />
      <div className="Filtro">
        <Filtro
          options={opciones}
          callback={(value) => {
            setCurrentFilter(value);
          }}
        />
        {currentFilter === FILTER_MAP.GENRE &&
          currentFilter !== FILTER_MAP.PRICE && (
            <Filtro
              options={genres}
              callback={(value) => {
                setCurrentGenre(value);
              }}
            />
          )}
        {currentFilter === FILTER_MAP.ARTIST &&
          currentFilter !== FILTER_MAP.PRICE && (
            <Filtro
              options={artists}
              callback={(value) => {
                setCurrentArtist(value);
              }}
            />
          )}
      </div>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          marginLeft: 10,
          marginTop: 10,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {filteredInfo.length === 0 && <h2>No hay items para este filtro</h2>}
        {filteredInfo.map((i) => (
          <Artes key={i.id} info={i} />
        ))}
      </Box>
    </div>
  );
}
