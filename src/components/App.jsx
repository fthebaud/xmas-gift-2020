import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import classNames from 'classnames';

import title from '../assets/title.png';
import gift from '../assets/gift.gif';
import swipe from '../assets/swipe-left.gif';
import santaWave from '../assets/santa-wave.gif';
import santaRun from '../assets/santa-run.gif';
import map from '../assets/map.png';
import pic01 from '../assets/01.jpg';
import pic02 from '../assets/02.jpg';
import pic03 from '../assets/03.jpg';
import pic04 from '../assets/04.jpg';

import Slide from './slide/Slide';
import './App.css';

const App = () => { 
  const [currentSlideId, setCurrentSlideId] = useState(0);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log("User Swiped!", eventData)
      if (eventData.dir === "Left") {
        setCurrentSlideId((prev) => prev + 1 > 6 ? 6 : prev + 1)
      } else {
        setCurrentSlideId((prev) => prev - 1 < 0 ? 0 : prev - 1)
      }
    }
  });

  return (
    <div className="app" {...handlers}>
      <div className="slide-wrapper">
        <Slide slideId={0} currentSlideId={currentSlideId}>
            <img src={title} className="picture-max-width" alt="joyeux noel" />
            <p>Un cadeau vous attend !</p>
            <p>Mais qu'est ce que c'est ???</p>
            <img className="gift picture-max-width" src={gift} alt="christmas gift"/>
            <div className="separator"/>
            <p className="swipe">Swipe left!</p>
            <img src={swipe} className="picture-max-width" alt="swipe left"/>
        </Slide>
        <Slide slideId={1} currentSlideId={currentSlideId}>
          <p>Un bon pour un week-end</p>
          <p>en <span className="bold">gite troglodyte</span> !</p>
          <p>Ho ho ho !</p>
          <img src={santaWave} className="picture-max-width" alt="santa-wave"/>
          <div className="separator"/>
          <p>Et c'est où ?</p>
        </Slide>
        <Slide slideId={2} currentSlideId={currentSlideId}>
          <p>À Parnay dans le Maine et Loire,</p>
          <p>à 10 minutes de Saumur en amont de la Loire.</p>
          <img className="full-width" src={map} alt="carte"/>
          <div className="separator"/>
          <p>Et il est joli ce gîte troglodyte ?</p>
        </Slide>
        <Slide css="slide3" slideId={3} currentSlideId={currentSlideId}>
          <p>Plutôt, oui !</p>
          <p>Regardez donc à quoi ça ressemble :</p>
          <img className="picture full-width" src={pic01} alt="carte"/>
        </Slide>
        <Slide css="slide4" slideId={4} currentSlideId={currentSlideId}>
          <img className="picture full-width" src={pic02} alt="carte"/>
          <img className="picture full-width" src={pic03} alt="carte"/>
        </Slide>
        <Slide css="slide5" slideId={5} currentSlideId={currentSlideId}>
          <img className="picture full-width" src={pic04} alt="carte"/>
          <div className="picture separator"/>
          <p>Et on part quand ?</p>
        </Slide>
        <Slide slideId={6} currentSlideId={currentSlideId}>
          <p>Le weekend est au choix...</p>
          <p>...Mais à définir le plus vite possible ! 😉</p>
          <img src={santaRun} className="picture-max-width" alt="santa is running"/>
          <p>Plus de détails sur le gîte <a href="https://www.gites-de-france.com/fr/pays-de-la-loire/maine-et-loire/la-ptite-troglo-h49g015059">ici</a></p>
        </Slide>
      </div>
      <footer>
        <div className={classNames("circle", {selected: currentSlideId === 0})} />
        <div className={classNames("circle", {selected: currentSlideId === 1})} />
        <div className={classNames("circle", {selected: currentSlideId === 2})} />
        <div className={classNames("circle", {selected: currentSlideId === 3})} />
        <div className={classNames("circle", {selected: currentSlideId === 4})} />
        <div className={classNames("circle", {selected: currentSlideId === 5})} />
        <div className={classNames("circle", {selected: currentSlideId === 6})} />
      </footer>
    </div>
  );
}

export default App;
