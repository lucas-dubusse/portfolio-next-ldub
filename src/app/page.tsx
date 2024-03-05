import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titre}>Mémoire sur l'éco-conception des sites Internet avec NextJS</h1> <br></br>
      <p className={styles.memoire}> Dans un monde où la consommation énergétique et les émissions de gaz à effet de serre sont de plus en plus préoccupantes, il est essentiel de repenser la façon dont nous concevons et développons les sites Internet. <br></br>
       L'éco-conception des sites web vise à réduire leur impact environnemental tout en maintenant des performances optimales et une expérience utilisateur de qualité.<br></br><br></br>
       Nous verrons en première partie pourquoi utiliser NextJS pour concevoir et réaliser vos sites web de manière écologique. Nous aborderons ensuite en quoi mon portfolio est éco-conçu.<br></br>
       Next.js est un framework de développement web basé sur React, conçu pour faciliter la création de sites web modernes et performants. Il offre la possiblité de réaliser des sites éco-conçus grâce à plusieurs concepts :<br></br>
       Tout d'abord, NextJS permet de générer des pages HTML statiques à la construction du site, réduisant ainsi la charge serveur et la consommation énergétique associée aux requêtes dynamiques.<br></br>
       Ensuite, NextJS génère des pages côté serveur plutôt que côté client, ce qui réduit le temps de chargement et améliore l'expérience pour les utilisateurs.<br></br>
       De plus, NextJS propose diverses options pour optimiser les ressources comme le regroupement et la minification des fichiers CSS et JavaScript, contribuant ainsi à réduire la taille totale des fichiers à télécharger.<br></br>
       Parrallèlement, une comparaison avec d'autres solutions de développement web comme Angular prouve les avantages spécifiques de Next.js en termes d'éco-conception et de performances car ce
       genre de framework n'inclue pas les conceps cités plus haut.
       <br></br> <br></br>
       Si on s'intéresse au site web portfolio proposé, des techniques spécifiques ont été mises en œuvre lors de la conception. 
       Il a été choisi de ne pas diffuser de média inutilement comme des vidéos ou présentations des sites que j'ai créé, étant donné que ceux-ci sont disponibles sur GitHub.<br></br>
       De plus, j'ai décidé de créer des composants réutilisables, comme pour les cartes de compétences ou les cadres d'expériences. En effet, ceux ci ont été réutilisés pour chaque compétences /
       expérience différente, ce qui permet d'optimiser le code, ce qui contribue à une meilleure efficacité énergétique lors du chargement du site.<br></br>
       Troisièmement, la technologique du rendu statique a bel et bien été utilisée étant donné qu'aucune page n'est générée à la volée lorsqu'un utilisateur accède à la page. Cela réduit la consommation de
       ressources serveur et la quantité de données tranférées sur le réseau, contribuant ainsi à une empreinte environnementale réduite.<br></br><br></br>
       En conclusion, l'utilisation de Next.js pour concevoir des sites Internet éco-conçus offre une approche prometteuse pour réduire l'empreinte environnementale du web. <br></br> Les fonctionnalités telles
       que le pré-rendu statique et l'optimisation des ressources permettent d'améliorer les performances tout en minimisant la consommation d'énergie. <br></br> Cette approche reflète un engagement envers un
       développement web plus durable et respectueux de l'environnement, offrant des avantages tant pour les utilisateurs que pour la planète.</p>
    </div>
  )
}
