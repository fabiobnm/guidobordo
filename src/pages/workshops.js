import { useQuery } from '@apollo/client';
import client from '../lib/apolloClient';
import { GET_POSTSEduc } from '../lib/queries';
import Sidebar from '../components/Sidebar'; 
import NewsButt from '../components/tastoNews';


export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTSEduc, { client });

  if (loading) return <p>Loading...</p>;
  if (error) {
    alert('err');
    console.error('Errore nella query:', error.message);
    console.error('Dettagli dell\'errore:', error.graphQLErrors);
    console.error('Dettagli della risposta:', error.networkError);
    return <p>Error: {error.message}</p>;
  }

  console.log('Dati ricevuti:', data);

  return (
    <main>
    <div className='textWorkshops'>Guido Borso leads participatory photography workshops where visual practice becomes a tool for dialogue, connection, and active listening.
The workshops are designed as shared journeys, built collaboratively with the participants, where technical skills give way to collective experience and reflection on the surrounding context.

It’s an open approach that challenges traditional roles and values exchange, exploration, and the narratives that emerge from the group.</div>
      <div className="educational" style={{ display: 'flex', marginTop: '0px' }}>
        
        {data.educationals.map((progetto) => (
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
