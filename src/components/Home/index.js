import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoS from '../../assets/images/Logo-S.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
// import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={'Bonjour,'.split('')} idx={12} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={'je suis'.split('')} idx={20} />
            <img src={LogoS} alt="Logo S" />
            <AnimatedLetters letterClass={letterClass} strArray={'ylvia'.split('')} idx={27} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={'développeuse web.'.split('')} idx={32} />
          </h1>
          <h2>Front end & Back end | PHP | Symfony | React</h2>
          <Link to="/presentation/contact" className="flat-button">CONTACTEZ-MOI</Link>
        </div>
        <Logo />
      </div>
      {/* <Loader type='pacman' /> */}
    </>
  );
};

export default Home;
