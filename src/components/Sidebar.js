import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter(); // Ottieni il percorso attuale
  const [isVisible, setIsVisible] = useState(true); // Stato per la visibilità
  const [lastScrollPos, setLastScrollPos] = useState(0); // Ultima posizione di scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
        // Nascondi quando si scrolla verso il basso
        setIsVisible(false);
      } else {
        // Mostra quando si scrolla verso l'alto
        setIsVisible(true);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <aside
      style={{
        ...styles.sidebar,
        top: isVisible ? '0' : '-100px', // Nascondi mostrando fuori schermo
        transition: 'top 0.3s ease-in-out', // Animazione fluida
      }}
    >
      <ul style={styles.ul}>
        {/* Guido Borso a sinistra */}
        <li style={styles.left}>
          <Link href="/" style={router.pathname === '/' ? styles.linkHome : styles.linkHome}>
            Guido Borso
          </Link>
        </li>

        {/* Works, Commissions, Educational al centro */}
        <div style={styles.centerContainer}>
          <li>
            <Link 
              href="/works2"
              style={router.pathname === '/works2' ? styles.activeLink : styles.link}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/commissions"
              style={router.pathname === '/commissions' ? styles.activeLink : styles.link}
            >
              Commissions
            </Link>
          </li>
          <li>
            <Link
              href="/educational"
              style={router.pathname === '/educational' ? styles.activeLink : styles.link}
            >
              Educational
            </Link>
          </li>
        </div>

        {/* About a destra */}
        <li style={styles.right}>
          <Link
            href="/about"
            style={router.pathname === '/about' ? styles.activeLink : styles.linkAbout}
          >
            about
          </Link>
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
    top: '0%', // Modificato dinamicamente
    zIndex: 10,
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
    marginRight: 'auto',
  },
  centerContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexGrow: 1,
  },
  right: {
    marginLeft: 'auto',
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
  activeLink: {
    display: 'block',
    padding: '5px 20px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '28px',
    fontWeight: 'bold',
    borderBottom: '2px solid',
  },
};

export default Sidebar;
