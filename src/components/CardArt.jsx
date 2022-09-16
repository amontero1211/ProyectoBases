import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardArt({ children }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
