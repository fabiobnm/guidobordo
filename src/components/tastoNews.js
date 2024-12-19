import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NewsButt = () => {
  const router = useRouter(); // Ottieni il percorso attuale

  return (
    <div style={styles.gigio}>
     <h1 style={styles.news} >news</h1>
    
    </div>
  );
};

const styles = {
  gigio: {
    width: 'auto',
    backgroundColor: 'none',
    paddingLeft: '45px',
    paddingRight: '45px',
    paddingTop: '20px',
    position: 'fixed',
    bottom: '0%',
    right:'0px'
  },
  news:{
backgroundColor:'blue',
padding:'10px',
fontSize:'40px',
  },
  
};

export default NewsButt;
