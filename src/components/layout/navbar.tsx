import styles from './layout.module.css';
import Link from 'next/link';

const navBarLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/experiences', label: 'Experiences'},
  { href: '/competences', label: 'Compétences'}
];

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      {navBarLinks.map((item, index) => (
        <div key={index} className={styles.navbar_links}>
          <Link href={item.href} className={styles.header_links_items}>
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
