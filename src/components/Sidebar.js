import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.ul}>
        {/* Guido Borso a sinistra */}
        <li style={styles.left}>
          <Link href="/" style={styles.linkHome}>Guido Borso</Link>
        </li>

        {/* Works, Commissions, Educational al centro */}
        <div style={styles.centerContainer}>
          <li><Link href="/works" style={styles.link}>Works</Link></li>
          <li><Link href="/commissions" style={styles.link}>Commissions</Link></li>
          <li><Link href="/educational" style={styles.link}>Educational</Link></li>
        </div>

        {/* About a destra */}
        <li style={styles.right}>
          <Link href="/about" style={styles.linkAbout}>about</Link>
        </li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: '45px',
    paddingRight: '45px',
    paddingTop: '20px',
    position: 'fixed',
    top: '0%',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  left: {
    marginRight: 'auto', // Spinge gli altri elementi verso destra
  },
  centerContainer: {
    display: 'flex',
    gap: '20px', // Spazio tra i link centrali
    justifyContent: 'center', // Centra gli elementi orizzontalmente
    flexGrow: 1, // Occupa spazio aggiuntivo per centrare il contenuto
  },
  right: {
    marginLeft: 'auto', // Spinge "about" verso l'estrema destra
  },
  linkHome: {
    display: 'block',
    padding: '5px 0px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '28px',
  },
  link: {
    display: 'block',
    padding: '5px 20px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '28px',
  },
  linkAbout: {
    display: 'block',
    padding: '5px 0px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '28px',
  },
};

export default Sidebar;
