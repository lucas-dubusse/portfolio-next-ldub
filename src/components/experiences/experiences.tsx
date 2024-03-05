import Link from "next/link";
import styles from '../../components/experiences/experiences.module.css';

type ExperienceBoxProps = {
  title: string;
  date: string;
  description : string ;
  href: string;
};

const ExperienceBox: React.FC<ExperienceBoxProps> = ({ title, date, description, href }) => (
  <div className={styles.box}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.date}>{date}</p>
    <p className={styles.description}>{description}</p>
    <Link className={styles.linkButton} href={href}>
      Site de l'entreprise
    </Link>
  </div>
);

const experiences = [
  { title: "Les Nymphéas", 
    date: "Juin 2022 - Aout 2022", 
    description: "J'ai travaillé en tant que serveur au restaurant les Nymphéas. Ce fut une expérience très enrichissante pour découvrir le contact avec les clients et le travail en équipe", 
    href: "https://www.giverny-restaurant-nympheas.fr/" 
  },
  { title: "CGI", 
    date: "Avril 2023 - Mai 2023", 
    description: "J'ai intégré CGI en tant que développeur SAP ABAP pendant ma 2ème année de BUT Informatique, pour un stage de 2 mois",
    href: "https://www.cgi.com/fr" 
  },
  { title: "CGI", 
    date: "Juin 2023 - Aout 2023", 
    description: "J'ai ensuite continué à travailler chez CGI pendant l'été où j'ai pu intégrer un projet de grande ampleur de migration S/4 HANA",
    href: "https://www.cgi.com/fr" 
  },
  { title: "CGI", 
    date: "Septembre 2023 - Aujourd'hui", 
    description: "J'ai énormément apprécié l'équipe et les missions qui m'étaient assignées, c'est pour cette raison que je suis actuellement en alternance chez CGI",
    href: "https://www.cgi.com/fr" 
  },
];

const ExperienceComponent = () => (
  <div className={styles.container}>
    <h1 className={`${styles.top_title}`}>Mes Expériences Professionnelles</h1>
    <div className={styles.experiencesContainer}>
    {experiences.map((experience, index) => (
      <ExperienceBox key={index} {...experience} />
    ))}
    </div>
  </div>
);

export default ExperienceComponent;
