import { useQuery } from '@apollo/client';
import client from '../lib/apolloClient';
import { GET_POSTSEducNew } from '../lib/queries';
import Sidebar from '../components/Sidebar'; 
import NewsButt from '../components/tastoNews';


export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTSEducNew, { client });

  if (loading) return <p>Loading...</p>;
  if (error) {
    alert('err');
    console.error('Errore nella query:', error.message);
    console.error('Dettagli dell\'errore:', error.graphQLErrors);
    console.error('Dettagli della risposta:', error.networkError);
    return <p>Error: {error.message}</p>;
  }

  console.log('Dati ricevuti:', data.workshops[0]);

  return (
    <main>
    <div className='textWorkshops'  dangerouslySetInnerHTML={{ __html: data.workshops[0].text.html }}></div>
      <div className="educational" style={{ display: 'flex', marginTop: '0px' }}>
        
        {data.workshops[0].educational.map((progetto) => (
           <div>
          
          <div style={{marginTop:'50px'}} className="cardWorkshops" key={progetto.id}>
            <div >
              {/* Lato frontale */}
                <img 
                  style={{ height: '400px' }} 
                  src={progetto.copertina.url} 
                  alt={progetto.nome} 
                />
             
            </div>
           
          </div>
          </div>
        ))}

      </div>
      
      <Sidebar />
    </main>
  );
}
