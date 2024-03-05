"use client";
import React, { useState } from 'react';
import styles from './competences.module.css';
import Image, { StaticImageData } from 'next/image';

import javaIcon from '../../../public/java.png'
import javascriptIcon from '../../../public/javascript.png'
import pythonIcon from '../../../public/python.png'
import laravelIcon from '../../../public/laravel.png'
import sapIcon from '../../../public/SAP.png'
import htmlcssIcon from '../../../public/HTML CSS.png'
import sqlIcon from '../../../public/sql.png'
import gitIcon from '../../../public/github_name.png'
import reactIcon from '../../../public/react.png'
import springIcon from '../../../public/spring.png'

interface Competences {
  note: number;
  experience: string;
  apprentissage: string;
  description: string;
  icon: StaticImageData;
}

const competences:Competences[] = [
    { note : 16, experience : " 3 ans", apprentissage : " à l'IUT de Lens" ,description : " Projets : Création de jeux, d'applications de gestion de collectifs, d'entreprise et mise en relation avec différentes bases de données ( SQL, Neo4J, JDBC )", icon : javaIcon },
    { note : 14, experience : " 2 ans", apprentissage : " à l'IUT de Lens" ,description : " Projets : Création d'applications web interactives pour de multiples projets ( Musée en ligne, site de match, site de tournoi en ligne )", icon : javascriptIcon },
    { note : 15, experience : " 5 ans", apprentissage : ", au lycée en premier lieu puis à l'IUT de Lens" ,description : " Projets : Création de multiples jeux, utilisation de nombreuses librairies pour la création de programmes ( Math, Turtle, Numpy, pandas, matplotlib, etc... ) et mise en relation avec des bases de données", icon : pythonIcon },
    { note : 14, experience : " 2 ans", apprentissage : " à l'IUT de Lens" ,description : " Projets : Création de plusieurs sites web pour des projets et pour des entreprises", icon : laravelIcon },
    { note : 18, experience : " 1 an", apprentissage : " au cours de mon alternance" ,description : " Projets : Apprentissage du language en alternance et intégration d'un projet de migration S/4HANA", icon : sapIcon },
    { note : 13, experience : " 3 ans", apprentissage : " à l'IUT de Lens" ,description : " Projets : Création de site web pour un musée, pour des entreprises et portfolios", icon : htmlcssIcon },
    { note : 17, experience : " 3 ans", apprentissage : " à l'IUT de Lens" ,description : " Projets : Création de bases de données complexes et liaison à différents languages pour de multiples applications", icon : sqlIcon },
    { note : 15, experience : " 3 ans", apprentissage : " à l'IUT de Lens" ,description : " Projets : Intégration de Git à tous les projets réalisés et apprentissage des outils fournis par Git ( Pipelines / Jobs )", icon : gitIcon },
    { note : 15, experience : " 1 an", apprentissage : " à l'IUT de Lens" ,description : " Projets : Création de site web en cours pour l'apprentissage", icon : reactIcon },
    { note : 15, experience : " 1 an", apprentissage : " à l'IUT de Lens" ,description : " Projets : Création de site web en cours pour l'apprentissage", icon : springIcon }
]

const SkillsCard: React.FC<Competences> = ({ note, experience, apprentissage, description, icon }) => {
  const handleFlip = (event: React.MouseEvent<HTMLDivElement>) => {
      const card = event.currentTarget;
      card.classList.toggle(styles.active);
  };

  return (
      <div className={styles.card} onClick={handleFlip}>
          <div className={styles.cardContent}>
              <div className={styles.front}>
                  <Image
                      className={styles.icon}
                      src={icon}
                      alt={icon.src}
                      height={500}
                      width={200}
                  />
              </div>
              <div className={styles.back}>
                  <p className={styles.experience}> J'ai appris ce langage durant {experience} {apprentissage}</p>
                  <br></br>
                  <br></br>
                  <p className={styles.experience}>{description}</p>
              </div>
          </div>
      </div>
  );
};

const SkillComponent = () => (
    <div className={styles.container}>
        {competences.map((competence, index) => (
            <SkillsCard key={index} {...competence} />
        ))}
  </div>
)

export default SkillComponent;
