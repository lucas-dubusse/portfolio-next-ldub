import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image'
import GitHubIcon from '../../../public/github.png';
import GitLabIcon from '../../../public/gitlab.png';
import LinkedinIcon from '../../../public/linkedin.png';

const socialLinks = [
    { href: 'https://github.com/lucas-dubusse', src: GitHubIcon, alt: 'GitHub' },
    { href: 'https://gitlab.univ-artois.fr/lucas_dubusse', src: GitLabIcon, alt: 'GitLab' },
    { href: 'https://www.linkedin.com/in/lucas-dubusse/', src: LinkedinIcon, alt: 'LinkedIn' },
  ];

export default function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <ul className={styles.list}>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <Image
                  className={styles.social_links}
                  src={link.src}
                  alt={link.alt}
                  height={50}
                />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
