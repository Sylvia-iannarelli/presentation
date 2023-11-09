import './styles.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json';
import Loader from 'react-loaders';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="couverture du projet"
                />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => window.open(port.url)}
                  >Voir
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
          <h2>En cours de construction...</h2>
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Portfolio;
