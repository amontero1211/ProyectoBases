import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from './Button';
import ArtTitle from './ArtTitle';
import ArtImagen from './ArtImagen';
import CardArt from './CardArt';
import CardDescription from './CardDescription';
import '../App.css';

export default function Artes() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        marginLeft: 10,
        marginTop: 10,
      }}
    >
      <CardArt>
        <ArtTitle>TITULO</ArtTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            marginBottom: 4,
            width: 200,
          }}
        >
          <ArtImagen
            pictureUrl="/src/pictures/Logo Museo.png"
            altText="Art"
            className="Tarjeta"
          />
        </Box>
        <CardDescription>Info</CardDescription>
        <Box
          sx={{
            marginTop: 4,
            marginLeft: 12,
          }}
        >
          <Link to="/vermas">
            <Button>Ver mas</Button>
          </Link>
        </Box>
      </CardArt>
    </Box>
  );
}
