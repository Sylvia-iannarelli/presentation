import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3, faGithub, faHtml5, faPhp, faReact, faSymfony,
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import './styles.scss';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Intéressée depuis toujours par l'informatique, j'ai enfin trouvé une opportunité pour me former et ainsi me reconvertir en Développeuse web, après plus de 20 ans dans une grande fédération d'associations (compétences en gestion de projet notamment).
          </p>
          <p>
            J'ai obtenu le titre professionnel DWWM en juillet 2023, après avoir suivi une formation intensive d'une durée de 6 mois chez O'clock.
          </p>
          <p>
            Je suis de nature curieuse et inventive, mais aussi rigoureuse et persévérante, et j’ai hâte de pouvoir mettre cela en application dans un métier qui correspond bien à ma personnalité et à mes envies.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPhp} color="#6181b6" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#61dafb" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faSymfony} color="#1a171b" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#e14e10" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#2465f1" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#171515" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
