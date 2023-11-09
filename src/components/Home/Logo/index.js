import './styles.scss';
import LogoS1 from '../../../assets/images/Logo-S-1.svg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS1} alt="Logo S" />
    </div>
  );
};

export default Logo;
