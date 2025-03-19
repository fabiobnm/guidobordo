import { useQuery } from '@apollo/client';
import client from '../lib/apolloClient';
import { GET_POSTSHome } from '../lib/queries';
import Sidebar from '../components/Sidebar';
import Draggable from 'react-draggable';
import Draggino from '@/components/draggino';



export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTSHome, { client });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Errore nella query:', error.message);
    return <p>Error: {error.message}</p>;
  }

  console.log('Dati ricevuti:', data.homePages[0].cover);

  const handleClick = (event) => {
    const img = event.target;
    const currentZIndex = parseInt(img.style.zIndex, 10) || 0;
    img.style.zIndex = currentZIndex + 4; // Incrementa lo zIndex direttamente
  };

  return (
    <main style={{ marginTop: '0px' }}>
      <Draggino/>

      <img style={{ zIndex: 99, width: '110px', position: 'fixed', bottom: 0, left: '-50px' }} src='TARTA.png' />

      <Sidebar />
    </main>
  );
}
