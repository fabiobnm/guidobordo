import { useState } from 'react';
import { useQuery } from '@apollo/client';
import client from '../lib/apolloClient';
import { GET_POSTS, GET_POSTSCommissions } from '../lib/queries';
import Sidebar from '../components/Sidebar';
import { useSpring, animated } from '@react-spring/web';

export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTSCommissions, { client });
  const [hoverText, setHoverText] = useState("Commissioned works"); // Testo predefinito



  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Errore nella query:', error.message);
    return <p>Error: {error.message}</p>;
  }

console.log('cicici'+ data.commissions[0].infoWork.html);

  return (
    <main style={{ marginTop: '75px' }}>
      <div style={{display:'flex', overflowX:'scroll', width:'auto', marginLeft:'50px', marginTop:'150px'}}>
      {data.commissions.map((commissions) => (
        <div key={commissions.id}>
              <img
                src={commissions.immagine.url}
                style={{ height:'60vH',width: 'auto', objectFit: 'cover',marginRight:'30px'}}
                onMouseEnter={() => setHoverText(commissions.infoWork?.html)} // Cambia il testo quando passi sopra
                onMouseLeave={() => setHoverText(" ")} // Ripristina il testo originale quando esci
            
            />
           
        
        </div>
      ))}
     
      </div>
      <div style={{width:'50%', color:'black',margin:'45px'}} dangerouslySetInnerHTML={{ __html: hoverText }}></div>

      <Sidebar />
    </main>
  );
}
