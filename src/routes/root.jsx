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
import { listItemAvatarClasses } from '@mui/material';
// import Slack from '@mui/material/Slack';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

const opciones = ['Filtrar por Genero', 'Filtrar por Artista', 'Precio'];

const opcionesgenero = [
  'Pintura',
  'Fotografia',
  'Ceramica',
  'Orfebreria',
  'Escultura',
];

const priceOptions = ['Menor a Mayor', 'Mayor a Menor'];

const URL = 'http://127.0.0.1:8000';

const FILTER_MAP = {
  GENRE: 'Filtrar por Genero',
  ARTIST: 'Filtrar por Artista',
  PRICE: 'Precio',
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
  const [priceData, setpriceData] = useState([priceOptions]);
  const [currentPrice, setcurrentPrice] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const { data: artworksData } = await axios.get(`${URL}/api/artworks`);
      const { data: artistsData } = await axios.get(`${URL}/api/artists`);
      console.log(artworksData);
      setArtistData(artistsData);
      setInfo(artworksData);
      // eslint eslint-ignore
      setGenres((prevState) => {
        return Array.from(
          new Set([...prevState, ...artworksData.map(({ genre }) => genre)])
        );
      });
      setpriceData(priceOptions);
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
    if (currentFilter === FILTER_MAP.PRICE) {
      if (currentPrice === priceOptions[0]) {
        setFilteredInfo(info.sort((i, j) => (i.price < j.price ? -1 : 1)));
      }
      if (currentPrice === priceOptions[1]) {
        setFilteredInfo(info.sort((i, j) => (i.price > j.price ? -1 : 1)));
      }
    }
  }, [currentFilter, currentGenre, currentArtist, currentPrice]);

  return (
    <div className="filter">
      <Header />
      <Welcome />
      <Box sx={{ display: 'flex', gap: 5 }}>
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
        {currentFilter === FILTER_MAP.PRICE && (
          <Filtro
            options={priceData}
            callback={(value) => {
              setcurrentPrice(value);
            }}
          />
        )}
      </Box>
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
