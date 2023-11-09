import './styles.scss';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters';
// import Loader from 'react-loaders';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ls43nv6', 'template_dxuy4xf', form.current, 'oWmhcodcy_r6him5N')
      .then(
        () => {
          alert('Message bien envoyé !');
          window.location.reload(false);
        },
        () => {
          alert('Le message n\'a pas pu être envoyé');
        },
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contactez-moi'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Je suis à l'écoute de toutes propositions d'emploi ou de stage.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Sujet"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    type="text"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="ENVOYER"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sylvia iannarelli <br />
          29 rue Pierre Semard <br />
          42000 SAINT-ETIENNE <br />
          <span>iannarelli.sylvia@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[45.43385, 4.38010]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.43385, 4.38010]}>
              <Popup>Sylvia habite ici !</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/* <Loader type='pacman' /> */}
    </>
  );
};

export default Contact;
