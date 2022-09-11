import Box from '@mui/material/Box';
import Button from './Button';
import ArtTitle from './ArtTitle';
import ArtImagen from './ArtImagen';
import CardArt from './CardArt';
import CardDescription from './CardDescription';

export default function Artes() {
  return (
    <Box sx={{
      display: 'flex',
      gap: 3,
      marginLeft: 10,
      marginTop: 5,
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
            width: 150,
          }}
        >
          <ArtImagen pictureUrl="/src/pictures/Logo Museo.png" altText="Art" />
        </Box>
        <CardDescription>
          Info
        </CardDescription>
        <Box
          sx={{
            marginTop: 4,
          }}
        >
          <Button>Ver mas</Button>
        </Box>
      </CardArt>
    </Box>
  );
}
