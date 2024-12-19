import { useQuery } from '@apollo/client';
import client from '../lib/apolloClient';
import { GET_POSTS } from '../lib/queries';
import Sidebar from '../components/Sidebar'; 

export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) {
    alert('err')
    console.log('ciaoooo')
    console.log(data)
    
    console.error('Errore nella query:', error.message);
    console.error('Dettagli dell\'errore:', error.graphQLErrors);
    console.error('Dettagli della risposta:', error.networkError);
    return <p>Error: {error.message}</p>;
  }

  console.log('Dati ricevuti:', data);

  return (
    <main>
      <h1>Progetti</h1>
      {data.progettis.map((progetto) => (
        <div className='bg-red-200 text-black hover:bg-yellow-200' key={progetto.id}>
          <h2>{progetto.nome}</h2>
          <p>{progetto.info}</p>
          <img style={{height:'200px'}} src={progetto.cover.url} alt={progetto.nome} />
        </div>
      ))}

<Sidebar />

    </main>
  );
}
